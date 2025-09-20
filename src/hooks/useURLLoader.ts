import { reactive, toRefs } from 'vue'
import axios from 'axios'
interface Iresult<T> {
  result: T | null,
  loading: boolean,
  error: Error | null
}
const useURLLoader = <T>(url: string) => {
  const data: Iresult<T> = reactive({
    result: null,
    loading: true,
    error: null
  })
  axios.get(url).then(rawData => {
    data.result = rawData.data
  }).catch(e => {
    data.error = e
  }).finally(() => {
    data.loading = false
  })
  return toRefs(data)
}
export default useURLLoader