export type IsRequiredKey<Obj extends Object, Key extends keyof Obj> = Pick<
    Obj,
    Key
> extends Required<Pick<Obj, Key>>
    ? true
    : false

// Tests
type A = IsRequiredKey<{ a: number; b?: string }, 'a'> // true
type B = IsRequiredKey<{ a: number; b?: string }, 'b'> // false
type C = IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'> // false
