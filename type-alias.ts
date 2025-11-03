//type aliase
// let sum1: (x: number, y: number)=> number
// const result = sum1(2, 3)

// type PlusTaype = (x: number, y: number) => number
// let sum2: PlusTaype
// type StrOrNumber = string | number
// let result2: StrOrNumber = "hello"

//字面量
const string1: 'str' = 'str' //类型为'str', 值只能是'str'
const number1: 123 = 123 //类型为123, 值只能是123
type Direction = 'up' | 'down' | 'left' | 'right'
const direction1: Direction = 'up' //类型为Direction, 值只能是'up'

interface IName {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'meinu', age: 30 }
