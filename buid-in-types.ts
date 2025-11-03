const a: Array<number> = [1, 2, 3]
const data = new Date()
data.getDate()
const reg = /abc/
reg.test('abc')

//build-in Object
Math.pow(2, 3)

//DDM and BOM
document.getElementById('app')

// Utility Types ts中实用性的工具类型
interface IPerson{
  name: string
  age: number
}
let pink1: IPerson = {
  name: 'xiaoming',
  age: 12
}

type IPartial = Partial<IPerson>
let pink2: IPartial = {}

type IOmit = Omit<IPerson, 'name'> 
let pink3: IOmit = { age: 20 }