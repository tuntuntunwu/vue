<script>
export default {
    // Props + Emits
    props: ['propsData'],
    emits: ['emitsEvent'],

    // Inject
    inject: ['provideData'],

    // Expose
    expose: ['exposeData'],

    data() {
        return {
            emitsData: "emitsValue",
            exposeData: "exposeValue"
        }
    }
}
</script>

<template>
    <div @click="$emit('emitsEvent', emitsData)">
        This is 'child-component', getting 1.props {{ $props }}, 1.attrs {{ $attrs }} 2.inject {{ provideData }},
            giving 1.emits {{ emitsData }} and 3.refs' expose {{ exposeData }}
    </div>
</template>
