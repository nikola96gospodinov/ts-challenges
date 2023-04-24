export type Push<T extends unknown[], U> = [...T, U]

// Tests
type Result = Push<[1, 2], '3'> // [1, 2, '3']
