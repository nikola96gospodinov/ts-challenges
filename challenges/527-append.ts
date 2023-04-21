export type Append<T extends Object, Property extends string, Value> = {
    [Key in Property]: Value
} & T

// Tests
type Test = { id: '1' }
type Result = Append<Test, 'value', 4> // expected to be { id: '1', value: 4 }
