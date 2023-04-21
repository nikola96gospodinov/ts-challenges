export type Absolute<Num extends number | bigint> =
    `${Num}` extends `-${infer Number extends number}` ? Number : Num

// Tests
type Test = -100
type Result = Absolute<Test> // expected to be "100"
