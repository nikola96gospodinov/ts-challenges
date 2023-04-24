export type IndexOf<
    T extends unknown[],
    U,
    Length extends unknown[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends U
        ? Length['length']
        : IndexOf<Rest, U, [0, ...Length]>
    : -1

// Tests
type Res = IndexOf<[1, 2, 3], 2> // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3> // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2> // expected to be -1
