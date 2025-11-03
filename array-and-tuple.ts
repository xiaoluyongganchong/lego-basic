let arrOfNumbers: number[] = [1, 2, 3]
arrOfNumbers.push(4)

//类数组
function test() {
  console.log(arguments.length)
}

let user: [string, number] = ['meinu', 30]
user.push(100) //可以push，但不能越界访问