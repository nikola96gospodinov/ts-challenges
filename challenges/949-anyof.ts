type FalsyVal<Value> = Value extends [] | Record<string, never> | '' | 0 | false
    ? false
    : true

export type AnyOf<T extends unknown[]> = true extends FalsyVal<T[number]>
    ? true
    : false

// Tests
type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
