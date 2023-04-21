export type IsUnion<T, B = T> = T extends B
    ? [B] extends [T]
        ? false
        : true
    : never

// Tests
type case1 = IsUnion<string> // false
type case2 = IsUnion<string | number> // true
type case3 = IsUnion<[string | number]> // false
