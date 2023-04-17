export type FilterOut<T extends unknown[], F> = T extends [
    infer First,
    ...infer Rest
]
    ? [First] extends [F]
        ? [...FilterOut<Rest, F>]
        : [First, ...FilterOut<Rest, F>]
    : []

// Tests
type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
