// Incomplete

export type Fill<Tuple extends unknown[], Val> = Tuple extends [
    infer First,
    ...infer Rest
]
    ? [Val, ...Fill<Rest, Val>]
    : []

// Tests
type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
