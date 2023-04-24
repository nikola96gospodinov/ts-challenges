export type Without<T extends unknown[], U> = T extends [
    infer First,
    ...infer Rest
]
    ? U extends unknown[]
        ? First extends U[number]
            ? Without<Rest, U>
            : [First, ...Without<Rest, U>]
        : First extends U
        ? Without<Rest, U>
        : [First, ...Without<Rest, U>]
    : []

// Tests
type Res = Without<[1, 2], 1> // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]> // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]> // expected to be []
