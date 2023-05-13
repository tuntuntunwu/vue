// 重用 有状态（响应式）逻辑
// 组合式函数（Composables）是一个利用Vue的组合式API来封装和复用有状态逻辑的函数
// 有状态逻辑负责管理会随时间而变化的状态，比如当前鼠标在页面中的位置，数据库的连接状态等

// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {  // 按照惯例，组合式函数名以use开头
    const x = ref(0);
    const y = ref(0);

    function update(event) {
        x.value = event.pageX;
        y.value = event.pageY;
    }

    // 挂靠生命周期来启动和卸载副作用
    onMounted(() => window.addEventListener('mousemove', update));
    onUnmounted(() => window.removeEventListener('mousemove', update))

    // 通过返回值暴露所管理的状态
    return { x, y };
}

// fetch.js
import { ref, isRef, unref, watchEffect } from 'vue'

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);

    function doFetch() {
        // 在请求之前重设状态
        data.value = null;
        error.value = null;

        fetch(unref(url))
            .then((res) => res.json())
            .then((json) => (data.value = json))
            .catch((err) => (error.value = err));
    }

    if (isRef(url)) {
        watchEffect(doFetch);  // 自动分析出需监听的响应源是url
    } else {
        doFetch();
    }

    return { data, error };
}

// 注意：
// ①约定和最佳实践：https://cn.vuejs.org/guide/reusability/composables.html#conventions-and-best-practices
// ②在选项式API中使用组合式函数：https://cn.vuejs.org/guide/reusability/composables.html#using-composables-in-options-api

