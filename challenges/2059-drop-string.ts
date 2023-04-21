import { StringToUnion } from './531-string-to-union'

export type DropString<
    Str extends string,
    Removed extends string
> = Str extends `${infer First}${infer Rest}`
    ? First extends StringToUnion<Removed>
        ? DropString<Rest, Removed>
        : `${First}${DropString<Rest, Removed>}`
    : Str

// Tests
type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
