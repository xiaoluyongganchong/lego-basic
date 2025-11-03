import axios from 'axios'
import calculator from './caculator'
axios.get('https://jsonplaceholder.typicode.com/todos/1')

calculator('plus', [1, 2, 3])
calculator.plus([1, 2, 3])

