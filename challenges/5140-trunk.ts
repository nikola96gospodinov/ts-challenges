export type Trunc<T extends number> = `${T}` extends `${infer Num}.${any}`
    ? Num
    : `${T}`

// Tests
type A = Trunc<12.34> // 12
