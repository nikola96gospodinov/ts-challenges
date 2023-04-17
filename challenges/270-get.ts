export type Get<
    Obj extends Object,
    Prop extends PropertyKey
> = Prop extends keyof Obj
    ? Obj[Prop]
    : Prop extends `${infer FirstProp}.${infer Rest}`
    ? FirstProp extends keyof Obj
        ? Obj[FirstProp] extends Object
            ? Get<Obj[FirstProp], Rest>
            : Obj[FirstProp]
        : never
    : never

// Tests
type Data = {
    foo: {
        bar: {
            value: 'foobar'
            count: 6
        }
        included: true
    }
    hello: 'world'
}

type A = Get<Data, 'hello'> // 'world'
type B = Get<Data, 'foo.bar.count'> // 6
type C = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
