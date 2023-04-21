export type Flatten<T extends unknown[]> = T extends [
    infer First,
    ...infer Rest
]
    ? First extends unknown[]
        ? [...Flatten<First>, ...Flatten<Rest>]
        : [First, ...Flatten<Rest>]
    : []

// Tests
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
