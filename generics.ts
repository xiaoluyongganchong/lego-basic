// function echo(arg) {
//   return arg
// }

// const result = echo(123)

// function echo<T>(arg:T):T {
// return arg
// }

// const result1 = echo(123)

// function swap<T,U>(tuple:[T,U]):[U,T] {
//   return [tuple[1],tuple[0]]
// }

// const result2 = swap(['hello',2])
// function echoWithArr<T>(arg:T):T {
//   console.log(arg.length) //T可能没有length属性
//   return arg
// }

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length) //T可能没有length属性
  return arg
}
const arrs = echoWithArr([1, 2, 3]) //只能传数组

//约束泛型
interface IWithLength {
  length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length) //T必须有length属性
  return arg
}
const string = echoWithLength('hello')
const arr2 = echoWithLength([1, 2, 3])

//泛型类
class Queue<T> {
  private data: T[] = []
  push(item: T) {
    return this.data.push(item)
  }
  pop() {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)

const poped = queue.pop()

if (poped) {
  poped.toFixed()
}

interface KeyPair<T, U> {
  key: T,
  value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: 'hello' }