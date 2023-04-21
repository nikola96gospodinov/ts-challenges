export type Split<
    Str extends string,
    Separator extends string,
    Result extends string[] = []
> = Str extends `${infer FirstPart}${Separator}${infer Rest}`
    ? Split<Rest, Separator, [...Result, FirstPart]>
    : [...Result, Str]

// Tests
type result = Split<'Hi! How are you?', ' '> // should be ['Hi!', 'How', 'are', 'you?']
