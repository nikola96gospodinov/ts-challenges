export type RequiredByKeys<
    Obj extends Object,
    Keys extends keyof Obj = keyof Obj
> = {
    [Key in keyof Obj as Key extends Keys ? Key : never]-?: Obj[Key]
} & {
    [Key in keyof Obj as Key extends Keys ? never : Key]: Obj[Key]
} extends infer NewObj
    ? { [Key in keyof NewObj]: NewObj[Key] }
    : never

// Tests
interface User {
    name?: string
    age?: number
    address?: string
}

type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
