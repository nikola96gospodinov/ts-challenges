export type TrimLeft<T extends string> = T extends ` ${infer R}`
    ? TrimLeft<R>
    : T

// Test
type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
