// Partial Solution

export type Unique<
    T extends unknown[],
    FinalArray extends unknown[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends FinalArray[number]
        ? Unique<Rest, FinalArray>
        : Unique<Rest, [...FinalArray, First]>
    : FinalArray

// Tests
type Res = Unique<[1, 1, 2, 2, 3, 3]> // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]> // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, 'a', 2, 'b', 2, 'a']> // expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]> // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]> // expected to be [unknown, any, never]
