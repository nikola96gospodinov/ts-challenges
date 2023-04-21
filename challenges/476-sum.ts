type Num = number | string | bigint
type NumberToArray<
    Num extends number | bigint,
    Accumulator extends unknown[] = []
> = Num extends Accumulator['length']
    ? Accumulator
    : NumberToArray<Num, [...Accumulator, unknown]>

// Partiral Solution
export type Sum<
    Num1 extends Num,
    Num2 extends Num,
    Accumulator1 extends unknown[] = [],
    Accumulator2 extends unknown[] = []
> = Num1 extends `${infer Number1 extends number | bigint}`
    ? Num2 extends `${infer Number2 extends number | bigint}`
        ? `${[...NumberToArray<Number1>, ...NumberToArray<Number2>]['length']}`
        : `${[...NumberToArray<Number1>, ...NumberToArray<Num2>]['length']}`
    : Num2 extends `${infer Number2 extends number | bigint}`
    ? `${[...NumberToArray<Num1>, ...NumberToArray<Number2>]['length']}`
    : `${[...NumberToArray<Num1>, ...NumberToArray<Num2>]['length']}`

// Tests
type T0 = Sum<2, 3> // '5'
type T1 = Sum<'13', '21'> // '34'
type T2 = Sum<'328', 7> // '335'
type T3 = Sum<1_000_000_000_000n, '123'> // '1000000000123'
