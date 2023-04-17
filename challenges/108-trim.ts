export type Trim<T extends string> = T extends ` ${infer Rest} `
    ? Trim<Rest>
    : T extends ` ${infer Rest2}`
    ? Trim<Rest2>
    : T extends `${infer Rest3} `
    ? Trim<Rest3>
    : T

// Tests
type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
