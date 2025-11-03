let str = "Hello World"

function getLength(input: string | number): number {
  const str = input as string //as关键字，将input断言成string类型
  if (str.length) {
    return str.length
  } else {
    const number = input as number //将input断言成number类型
    return number.toString().length
  }

}
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}