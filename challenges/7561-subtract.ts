import { ConstructTuple } from './7544-construct-tuple'

export type Subtract<
    Num1 extends number,
    Num2 extends number
> = ConstructTuple<Num1> extends [...ConstructTuple<Num2>, ...infer Rest]
    ? Rest['length']
    : never

// Tests
type a = Subtract<2, 1> // expect to be 1
type b = Subtract<1, 2> // expect to be never
type c = Subtract<2, 2> // expect to be 0
