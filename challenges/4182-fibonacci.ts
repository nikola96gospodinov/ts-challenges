export type Fibonacci<
    T extends number,
    N extends unknown[] = [1],
    Cur extends unknown[] = [1],
    Pre extends unknown[] = [1]
> = N['length'] extends T
    ? Cur['length']
    : Fibonacci<T, [...N, 1], Pre, [...Pre, ...Cur]>

// Tests
type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
