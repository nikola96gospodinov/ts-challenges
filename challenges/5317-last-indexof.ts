export type LastIndexOf<T extends unknown[], U> = T extends [
    ...infer First,
    infer Last
]
    ? Last extends U
        ? First['length']
        : LastIndexOf<First, U>
    : -1

// Tests
type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
