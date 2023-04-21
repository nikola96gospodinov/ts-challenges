export type KebabCase<Str extends string> =
    Str extends `${infer Part1}${infer Part2}`
        ? Part2 extends Uncapitalize<Part2>
            ? `${Uncapitalize<Part1>}${KebabCase<Part2>}`
            : `${Uncapitalize<Part1>}-${KebabCase<Part2>}`
        : Str

// Tests
type FooBarBaz = KebabCase<'FooBarBaz'>
const foobarbaz: FooBarBaz = 'foo-bar-baz'

type DoNothing = KebabCase<'do-nothing'>
const doNothing: DoNothing = 'do-nothing'
