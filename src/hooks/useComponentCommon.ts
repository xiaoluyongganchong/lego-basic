import { pick } from 'lodash-es'
import { computed } from 'vue'
import { TextComponentProps } from '../defaultProps'

const useComponentCommon = (props : TextComponentProps, picks :string[] ) => {
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
