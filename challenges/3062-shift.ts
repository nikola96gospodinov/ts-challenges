export type Shift<T extends unknown[]> = T extends [infer First, ...infer Rest]
    ? Rest
    : never

// Tests
type Result = Shift<[3, 2, 1]> // [2, 1]
