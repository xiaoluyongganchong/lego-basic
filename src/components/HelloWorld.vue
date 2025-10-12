<template>
  <h1>{{ msg }}</h1>
  <button @click="setCount">
    {{ count }}
  </button>
  <input
    v-model="todo"
    type="text"
  >
  <button
    class="addTodo"
    @click="addTodo"
  >
    add
  </button>
  <ul>
    <li
      v-for="(item,index) in todos"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>
  <button
    class="loadUser"
    @click="loadUser"
  >
    load
  </button>
  <p
    v-if="user.loading"
    class="loading"
  >
    loading
  </p>
  <div
    v-else
    class="userName"
  >
    {{ user.data && user.data.username }}
  </div>
  <p
    v-if="user.error"
    class="error"
  >
    error!
  </p>
  <Hello msg="1234" />
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Hello from './Hello.vue'
import axios from 'axios'
export default defineComponent({
    name: 'HelloWorld',
    components: {
        Hello
    },
    props: {
        msg: {
            type: String,
            default:''
        }
    },
    emits:['send'],
    setup(props,context) {
        const count = ref(0)
        const todo = ref('')
        const todos = ref<string[]>([])
        const user = reactive({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data: null as any,
            loading: false,
            error:false
        })
        const setCount = () => {
            count.value++
        }
        const addTodo = () => {
            if (todo.value) {
                todos.value.push(todo.value)
                context.emit('send',todo.value)
            }
        }
        const loadUser = () => {
            user.loading = true
            axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
                user.data = res.data
            }).catch(() => {
                user.error = true
            }).finally(() => {
                user.loading = false
            })
        } 
        return {
            count,
            todo,
            todos,
            setCount,
            addTodo,
            user,
            loadUser
        }
    }
})
</script>