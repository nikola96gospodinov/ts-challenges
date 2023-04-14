export type DeepReadonly<T> = {
    readonly [Key in keyof T]: T[Key] extends Object
        ? DeepReadonly<T[Key]>
        : T[Key]
}

// Tests
type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`
