export type TrimRight<T extends string> = T extends `${infer Rest} `
    ? TrimRight<Rest>
    : T

// Tests
type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
