export type Diff<Obj1 extends Object, Obj2 extends Object> = {
    [Key in keyof Obj1 as Key extends keyof Obj2 ? never : Key]: Obj1[Key]
}

// Tests
type a = Diff<{ name: string; age: number }, { name: string }> // { age: number }
