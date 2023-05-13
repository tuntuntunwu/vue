// 重用 有状态（响应式）数据与逻辑
// 状态指驱动整个应用的数据源，状态管理指管理这些数据源：https://cn.vuejs.org/guide/scaling-up/state-management.html#what-is-state-management

// store.js
import { reactive, ref } from 'vue'

export const store = reactive({
    count: 0,
    increment() {
        this.count++;
    }
})

// 全局状态，创建在模块作用域下
const globalCount = ref(0);

export function useCount() {
    // 局部状态，每个组件都会创建
    const localCount = ref(1);

    return {
        globalCount,
        localCount
    };
}

// Vue2 - Vuex: https://vuex.vuejs.org/zh/index.html

// Vue3 - Pinia: https://pinia.vuejs.org/