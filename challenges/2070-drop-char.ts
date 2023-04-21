export type DropChar<
    Str extends string,
    Char extends string
> = Str extends `${infer Start}${Char}${infer Rest}`
    ? DropChar<`${Start}${Rest}`, Char>
    : Str

// Tests
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
