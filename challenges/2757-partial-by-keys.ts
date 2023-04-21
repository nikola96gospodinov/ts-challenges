export type PartialByKeys<T, K extends keyof T> = {
    [Key in keyof T as Key extends K ? Key : never]?: T[Key]
} & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
} extends infer NewObj
    ? { [Key in keyof NewObj]: NewObj[Key] }
    : never

// Tests
interface User {
    name: string
    age: number
    address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
