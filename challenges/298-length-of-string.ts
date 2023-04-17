export type LengthOfString<
    Str extends string,
    _length extends unknown[] = []
> = Str extends `${infer FirstLetter}${infer Rest}`
    ? LengthOfString<Rest, [..._length, 0]>
    : _length['length']

// Tests
type a = LengthOfString<'hello'> // 5
type b = LengthOfString<'bar'> // 3
