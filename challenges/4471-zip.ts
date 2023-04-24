export type Zip<
    A extends unknown[],
    B extends unknown[],
    L extends unknown[] = []
> = L['length'] extends A['length'] | B['length']
    ? L
    : Zip<A, B, [...L, [A[L['length']], B[L['length']]]]>

// Tests
type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
