<script setup>
// 重用 涉及普通元素的底层DOM访问的逻辑

// 在<script setup>中，任何以v开头的驼峰式命名的变量都可以被用作一个自定义指令
// 一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。钩子函数会接收到指令所绑定元素作为其参数
const Directive = {  // https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
    mounted: (el) => el.focus()
}
const vFocus = Directive;

const Directive = {  // https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
    mounted: (el) => el.focus()
}

// 简化形式：对于自定义指令来说，一个很常见的情况是仅仅需要在mounted和updated上实现相同的行为，除此之外并不需要其他钩子，这种情况下我们可以直接用一个函数来定义指令
const vColor = (el, binding) => {
    el.style.color = binding.value;
}

// 注意：
// ①只有当所需功能只能通过直接的DOM操作来实现时，才应该使用自定义指令。其他情况下应该尽可能地使用v-bind这样的内置指令来声明式地使用模板，这样更高效，也对服务端渲染更友好
// ②选项式API：https://cn.vuejs.org/guide/reusability/custom-directives.html#introduce
// ③在组件上使用：自定义指令也可用于组件上，但这会有一些问题，因而并不推荐：https://cn.vuejs.org/guide/reusability/custom-directives.html#usage-on-components
</script>

<template>
    <input v-focus />
</template>