import { defineComponent } from 'vue'

const renderVue = defineComponent({
    props: {
        Vnode: {
            type: [Object, String],
            required:true
        }
    },
    render() {
        return this.Vnode
    }
})
export default renderVue