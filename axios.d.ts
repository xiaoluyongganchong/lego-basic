// 没有任何实际代码在，只有类型声明
// 只有类型 - 比如 interface，function（类型，不是函数）或者class等
// declare function axios(url: string): string

interface IAxios {
  get: (url: string) => string
  post: (url: string, data: any) => string
}
declare const axios: IAxios