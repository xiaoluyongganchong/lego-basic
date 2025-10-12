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
  <Hello msg="1234" />
</template>
<script>
import { defineComponent, ref } from 'vue'
import Hello from './Hello.vue'
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
        const todos = ref([])
        const setCount = () => {
            count.value++
        }
        const addTodo = () => {
            if (todo.value) {
                todos.value.push(todo.value)
                context.emit('send',todo.value)
            }
        }
        return {
            count,
            todo,
            todos,
            setCount,
            addTodo
        }
    }
})
</script>