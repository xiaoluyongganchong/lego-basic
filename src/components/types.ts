export interface IPerson {
  user?: {
    name: string,
    age: number
  }
}
export interface Ievent {
  (e: 'change', hidden: boolean): void
}