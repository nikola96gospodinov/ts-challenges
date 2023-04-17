export type CapitalizeWords<Str extends string> =
    Str extends `${infer FirstWord} ${infer Rest}`
        ? `${Capitalize<FirstWord>} ${CapitalizeWords<Rest>}`
        : Capitalize<Str>

// Tests
type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
