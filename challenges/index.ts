type Flatten<T extends unknown[]> = T extends [infer First, ...infer Rest]
    ? First extends unknown[]
        ? [...Flatten<First>, ...Flatten<Rest>]
        : [First, ...Flatten<Rest>]
    : []

type Append<T extends Object, Property extends string, Value> = {
    [Key in Property]: Value
} & T

type StringToUnion<T extends string> =
    T extends `${infer FirstLetter}${infer Rest}`
        ? FirstLetter | StringToUnion<Rest>
        : never

type Concat<Arr1 extends unknown[], Arr2 extends unknown[]> = [...Arr1, ...Arr2]

type FalsyVal<Value> = Value extends [] | Record<string, never> | '' | 0 | false
    ? false
    : true
type AnyOf<T extends unknown[]> = true extends FalsyVal<T[number]>
    ? true
    : false

type IsNever<T> = [never, T] extends [T, never] ? true : false

type PercentageParser<T extends string> =
    T extends `${infer First}${infer Rest}`
        ? [
              First extends '-' | '+' ? First : '',
              Rest extends `${infer Number}${'%'}`
                  ? First extends '-' | '+'
                      ? Number
                      : `${First}${Number}`
                  : First extends '-' | '+'
                  ? Rest
                  : T,
              Rest extends `${string}${'%'}` ? '%' : ''
          ]
        : ['', '', '']

type DropString<
    Str extends string,
    Removed extends string
> = Str extends `${infer First}${infer Rest}`
    ? First extends StringToUnion<Removed>
        ? DropString<Rest, Removed>
        : `${First}${DropString<Rest, Removed>}`
    : Str

type PickByType<T, U> = {
    [Key in keyof T as U extends T[Key] ? Key : never]: T[Key]
}

// 2688
type StartsWith<T extends string, U extends string> = T extends `${U}${string}`
    ? true
    : false

// 2693
type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
    ? true
    : false

//2757
type PartialByKeys<T, K extends keyof T> = {
    [Key in keyof T as Key extends K ? Key : never]?: T[Key]
} & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
}

// 2793
type Mutable<T> = {
    -readonly [Key in keyof T]: T[Key]
}

// 2852
type OmitByType<T, U> = {
    [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]
}

// 2946
type Push<T extends unknown[], U> = [...T, U]

// 3060
type Unshift<T extends unknown[], U> = [U, ...T]

// 3062
type Shift<T extends unknown[]> = T extends [infer First, ...infer Rest]
    ? Rest
    : never

// 3188
type TupleToNestedObject<T extends string[], U> = T extends [
    infer First,
    ...infer Rest
]
    ? {
          [Key in First extends PropertyKey
              ? First
              : never]: Rest extends string[]
              ? TupleToNestedObject<Rest, U>
              : never
      }
    : U

// 3192
type Reverse<T extends unknown[]> = T extends [infer First, ...infer Rest]
    ? Rest extends never
        ? First
        : [...Reverse<Rest>, First]
    : T

// 3196
type FlipArguments<T extends (...args: any) => any> = (
    ...args: Reverse<Parameters<T>>
) => ReturnType<T>

// 3312
type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer Params
) => any
    ? Params
    : never

// 3326
type BEM<
    B extends string,
    E extends string[] = [],
    M extends string[] = []
> = `${B}${E extends [] ? '' : `__${E[number]}`}${M extends []
    ? ''
    : `--${M[number]}`}`

// 4037
type IsPalindrome<T> = T extends `${infer First}${infer Middle}${infer Last}`
    ? `${First}` extends `${Last}`
        ? Middle['length'] extends 1 | 0
            ? true
            : IsPalindrome<Middle>
        : false
    : true

// 4179
type Flip<T extends Record<any, any>> = {
    [Key in keyof T as T[Key]]: Key
}

// 4182
type Fibonacci<
    T extends number,
    N extends unknown[] = [1],
    Cur extends unknown[] = [1],
    Pre extends unknown[] = [1]
> = N['length'] extends T
    ? Cur['length']
    : Fibonacci<T, [...N, 1], Pre, [...Pre, ...Cur]>

// 4425
type GreaterThan<
    Num1 extends number,
    Num2 extends number,
    NumLength extends number[] = []
> = Num1 extends NumLength['length']
    ? false
    : Num2 extends NumLength['length']
    ? true
    : GreaterThan<Num1, Num2, [...NumLength, 0]>

// 4471
type Zip<
    A extends unknown[],
    B extends unknown[],
    L extends unknown[] = []
> = L['length'] extends A['length'] | B['length']
    ? L
    : Zip<A, B, [...L, [A[L['length']], B[L['length']]]]>

// 4484
type isTuple<T extends unknown[]> = number extends T['length'] ? false : true

// 4518 - Incomplete
type Fill<Tuple extends unknown[], Val> = Tuple extends [
    infer First,
    ...infer Rest
]
    ? [Val, ...Fill<Rest, Val>]
    : []

// 4803
type TrimRight<T extends string> = T extends `${infer Rest} `
    ? TrimRight<Rest>
    : T

// 5117
type Without<T extends unknown[], U> = T extends [infer First, ...infer Rest]
    ? U extends unknown[]
        ? First extends U[number]
            ? Without<Rest, U>
            : [First, ...Without<Rest, U>]
        : First extends U
        ? Without<Rest, U>
        : [First, ...Without<Rest, U>]
    : []

// 5140
type Trunc<T extends number> = `${T}` extends `${infer Num}.${any}`
    ? Num
    : `${T}`

// 5153
type IndexOf<
    T extends unknown[],
    U,
    Length extends unknown[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends U
        ? Length['length']
        : IndexOf<Rest, U, [0, ...Length]>
    : -1

// 5310
type Join<T extends unknown[], U extends string | number> = T extends [
    infer First,
    ...infer Rest
]
    ? Rest['length'] extends 0
        ? `${First & string}`
        : `${First & string}${U}${Join<Rest, U>}`
    : ''

// 5317
type LastIndexOf<T extends unknown[], U> = T extends [
    ...infer First,
    infer Last
]
    ? Last extends U
        ? First['length']
        : LastIndexOf<First, U>
    : -1

// 5360 - Partial solution
type Unique<
    T extends unknown[],
    FinalArray extends unknown[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends FinalArray[number]
        ? Unique<Rest, FinalArray>
        : Unique<Rest, [...FinalArray, First]>
    : FinalArray

// 5423
type Intersection<T extends unknown[]> = T extends [infer Head, ...infer Tail]
    ? (Head extends unknown[] ? Head[number] : Head) & Intersection<Tail>
    : unknown
