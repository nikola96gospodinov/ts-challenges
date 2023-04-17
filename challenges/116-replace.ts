export type Replace<
    String extends string,
    From extends string,
    To extends string
> = From extends ''
    ? String
    : String extends `${infer Start}${From}${infer End}`
    ? `${Start}${To}${End}`
    : String

// Tests
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
