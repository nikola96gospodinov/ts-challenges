import { ConstructTuple } from './7544-construct-tuple'

type PlusOne<Num extends number> = [...ConstructTuple<Num>, Num]['length']

// Test PlusOne
type b = PlusOne<2>

export type NumberRange<
    Num1 extends number,
    Num2 extends number,
    Result extends number[] = []
> = Num1 extends PlusOne<Num2>
    ? Result
    : NumberRange<PlusOne<Num1>, Num2, [...Result, Num1]>

// Tests
type result = NumberRange<2, 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
