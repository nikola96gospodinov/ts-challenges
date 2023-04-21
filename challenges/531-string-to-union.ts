export type StringToUnion<T extends string> =
    T extends `${infer FirstLetter}${infer Rest}`
        ? FirstLetter | StringToUnion<Rest>
        : never

// Tests
type Test = '123'
type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"
