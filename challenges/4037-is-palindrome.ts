export type IsPalindrome<T> =
    T extends `${infer First}${infer Middle}${infer Last}`
        ? `${First}` extends `${Last}`
            ? Middle['length'] extends 1 | 0
                ? true
                : IsPalindrome<Middle>
            : false
        : true

// Tests
type a = IsPalindrome<'abc'> // false
type b = IsPalindrome<121> // true
