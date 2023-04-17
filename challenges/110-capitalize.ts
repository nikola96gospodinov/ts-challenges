export type Capitalize<Str extends string> =
    Str extends `${infer FirstLetter extends Str[0]}${infer RestOfString}`
        ? `${Uppercase<FirstLetter>}${RestOfString}`
        : never

// Tests
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
