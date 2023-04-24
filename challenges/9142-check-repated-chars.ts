export type CheckRepeatedChars<
    Str extends string,
    Letters extends string[] = []
> = Str extends `${infer FirstLetter}${infer Rest}`
    ? FirstLetter extends Letters[number]
        ? true
        : CheckRepeatedChars<Rest, [...Letters, FirstLetter]>
    : false

// Tests
type a = CheckRepeatedChars<'abc'> // false
type b = CheckRepeatedChars<'aba'> // true
