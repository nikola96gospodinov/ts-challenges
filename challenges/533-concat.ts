export type Concat<Arr1 extends unknown[], Arr2 extends unknown[]> = [
    ...Arr1,
    ...Arr2
]

// Tests
type Result = Concat<[1], [2]> // expected to be [1, 2]
