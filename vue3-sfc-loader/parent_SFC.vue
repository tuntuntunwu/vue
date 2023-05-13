<script>
import ChildComponent from './child_SFC.vue'

export default {
    // 局部注册
    components: {
        'child-component': ChildComponent
    },

    data() {
        return {
            // Props
            propsData: "propsValue",

            // Attributes
            attrsData: "attrsValue",

            // Emits
            emitsData: null,

            // Provide
            provideData: "provideValue",

            // Ref
            exposeData: null
        }
    },

    methods: {
        emitsEventHandler(value) {
            this.emitsData = value;
        }
    },
    provide() {
        return {
            provideData: Vue.computed(() => this.provideData)
        }
    },
    mounted() {
        this.exposeData = this.$refs.comRef.exposeData;
        console.log(this.$refs.comRef);
    }
}
</script>
    
<template>
    <div class="parent">
        This is 'parent-component', giving 1.props {{ propsData }} and 2.provide {{ provideData }},
            getting 1.emits {{ emitsData }} and 3.refs' expose {{ exposeData }}
        <child-component :propsData="propsData" :id="attrsData" @emits-event="emitsEventHandler" ref="comRef"></child-component>
    </div>
</template>
    
<style>
.parent {
    border: 1px red solid;
}
</style>

