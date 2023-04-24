export type GreaterThan<
    Num1 extends number,
    Num2 extends number,
    NumLength extends number[] = []
> = Num1 extends NumLength['length']
    ? false
    : Num2 extends NumLength['length']
    ? true
    : GreaterThan<Num1, Num2, [...NumLength, 0]>

// Tests
type a = GreaterThan<2, 1> //should be true
type b = GreaterThan<1, 1> //should be false
type c = GreaterThan<10, 100> //should be false
type d = GreaterThan<111, 11> //should be true
