import { pick } from 'lodash-es'
import { computed } from 'vue'
import { TextComponentProps } from '../defaultProps'

const useComponentCommon = (props: TextComponentProps & { isEditing?: boolean }, picks: string[] ) => {
    const styleProps = computed(() => pick(props, picks))
    const clickUrl = () => {
        if (props.actionType === 'url' && props.url && !props.isEditing) {
            window.location.href = props.url
        }
    }
    const handleClick = () => {
        if (props.actionType === 'url' && props.url && !props.isEditing) {
            window.location.href = props.url
        }
    }
    return {
        styleProps,
        clickUrl,
        handleClick
    }
}
export default useComponentCommon
