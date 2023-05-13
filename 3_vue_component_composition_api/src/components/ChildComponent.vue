<script setup>
import { useAttrs, inject, ref } from 'vue';

// Props
const props = defineProps(['propsData']);  // 传递给defineProps()的参数和提供给props选项的值是相同的

// Attributes
const attrs = useAttrs();

// Emits
const emitsData = ref("emitsValue");
const emit = defineEmits(['emitsEvent']);  // 获得emit()函数以在<script setup>中内部使用。当然，我们可以通过此赋值来为emit()函数赋予别名，但不推荐


// Inject
const provideData = inject("provideData", '默认值');  // inject(名, 默认值);


// Expose
const exposeData = ref("exposeValue");
// 通过模板引用访问到的实例的内容，在选项式API中是默认公有的，而在组合式API中是默认私有的。因而，在选项式API中，expose限制暴露内容，在组合式API中增加暴露内容
defineExpose({ exposeData });

</script>

<script>  // 可以使用一个额外的<script>继续操作，但也仅能用1个

console.log('extra <script> start...');

// <script setup>会创建并初始化实例，而额外的<script>则是在此实例中继续添加内容，因而需使用export default导出
export default {
    inheritAttrs: false,  // 禁止自动继承Attributes
    data() { return { extraData: "extraData" } }
}

console.log('extra <script> end...');
</script>

<template>
    <div @click="$emit('emitsEvent', emitsData)">
        <!-- 使用 -->
        This is 'child-component', getting 1.props {{ props }}, 1.attrs {{ attrs }} 2.inject {{ provideData }} and its own data {{ extraData }},
            giving 1.emits {{ emitsData }} and 3.refs' expose {{ exposeData }}
    </div>
</template>
