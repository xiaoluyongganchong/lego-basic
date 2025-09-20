import { onMounted, onUnmounted, ref } from 'vue'
function useMousePosition() {
  const x = ref(0)
  const y = ref(0)
  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })
  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })
  return {
    x,
    y
  }
}
export default useMousePosition