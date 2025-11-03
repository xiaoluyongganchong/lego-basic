//声明式写法
function add(x: number, y: number): number {
  return x + y
}
//函数表达式写法
const sum = (x: number, y: number): number => {
  return x + y
}

const he = (x: number, y: number, z?: number): number => {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}
//可选参数必须放在必选参数后面（可选参数之后就不能定义必选参数）

//将函数赋值给变量
let add2: (x: number, y: number) => number = add
//这里的箭头不是函数体，而是声明函数的类型的表示方法，这里是返回number类型，参数是number类型

//用interface描述函数类型
interface ISum {
  (x: number, y: number): number
}
let sum2: ISum = sum

