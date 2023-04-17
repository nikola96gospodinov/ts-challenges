export type ReplaceAll<
    String extends string,
    From extends string,
    To extends string
> = From extends ''
    ? String
    : String extends `${infer Start}${From}${infer End}`
    ? `${ReplaceAll<Start, From, To>}${To}${ReplaceAll<End, From, To>}`
    : String

// Tests
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
