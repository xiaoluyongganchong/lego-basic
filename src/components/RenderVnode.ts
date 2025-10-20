import { defineComponent } from 'vue'

const renderVue = defineComponent({
    props: {
        vNode: {
            type: [Object, String],
            required:true
        }
    },
    render() {
        return this.vNode
    }
})
export default renderVue