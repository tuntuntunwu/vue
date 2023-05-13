<script setup>  // 对于组件相关语法，只有在SFC中，组合式API与选项式API才有区别

// 直接使用，无需注册
import ChildComponent from './ChildComponent.vue'

import { ref, provide, readonly, onMounted } from 'vue';

// Props
const propsData = ref("propsValue");

// Attributes
const attrsData = ref("attrsValue");

// Emits
const emitsData = ref(null);
function emitsEventHandler(value) {
    emitsData.value = value;  // 注意这里的对于各个ref的.value使用
}


// Provide
const provideData = ref("provideValue");  // 直接写入provide()的话，本组件内将无法使用
provide("provideData", provideData);  // provide(名, 值);
const anotherData = readonly("anotherValue");
provide("anotherData", anotherData);
// 应确保所提供状态的声明和变更操作都内聚在同一个组件内，使其更容易维护：https://cn.vuejs.org/guide/components/provide-inject.html#working-with-reactivity


// Ref
const comRef = ref(null);
const exposeData = ref(null);
onMounted(() => {
    exposeData.value = comRef.value.exposeData;  // 注意这里的对于各个ref的.value使用
});

</script>
    
<template>
    <div class="parent">
        This is 'parent-component', giving 1.props {{ propsData }} and 2.provide {{ provideData }},
            getting 1.emits {{ emitsData }} and 3.refs' expose {{ exposeData }}
        <!-- 自动识别为ChildComponent -->
        <child-component :propsData="propsData" :id="attrsData" @emits-event="emitsEventHandler" ref="comRef"></child-component>
    </div>
</template>
    
<style>
.parent {
    border: 1px red solid;
}
</style>

