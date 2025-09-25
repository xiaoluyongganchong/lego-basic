import { pick } from 'lodash-es'
import { computed } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useComponentCommon = <T extends { [key: string]: any }>(props : T, picks :string[] ) => {
    const styleProps = computed(() => pick(props, picks))
    const clickUrl = () => {
        if (props.actionType === 'url' && props.url) {
            window.location.href = props.url
        }
    }
    return {
        styleProps,
        clickUrl
    }
}
export default useComponentCommon
