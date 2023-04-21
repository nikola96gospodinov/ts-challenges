type Merge<Obj1 extends Object, Obj2 extends Object> = {
    [Key in keyof Obj1 | keyof Obj2]: Key extends keyof Obj2
        ? Obj2[Key]
        : Key extends keyof Obj1
        ? Obj1[Key]
        : never
}

// Tests
type foo = {
    name: string
    age: string
}
type coo = {
    age: number
    sex: string
}

type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
