export type Reverse<T extends unknown[]> = T extends [
    infer First,
    ...infer Rest
]
    ? Rest extends never
        ? First
        : [...Reverse<Rest>, First]
    : T

// Tests
type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
