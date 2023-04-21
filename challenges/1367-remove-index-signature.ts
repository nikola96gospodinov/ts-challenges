type RemoveIndexSignature<Obj extends Object, Prop = PropertyKey> = {
    [Key in keyof Obj as Prop extends Key
        ? never
        : Key extends Prop
        ? Key
        : never]: Obj[Key]
}

// Tests
type Foo = {
    [key: string]: any
    foo(): void
}

type A = RemoveIndexSignature<Foo> // expected { foo(): void }
