export type StringToNumber<T extends string> =
    T extends `${infer Num extends number}` ? Num : T

// Tests
type a = StringToNumber<'hello'> // hello
type b = StringToNumber<'55'> // 55
type c = StringToNumber<'0'> // 0
