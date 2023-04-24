import { MinusOne } from './2257-minus-one'

export type FlattenDepth<
    Arr extends unknown[],
    Times extends number = 1,
    Looped extends unknown[] = []
> = Looped['length'] extends Times
    ? Arr
    : Arr extends [infer First, ...infer Rest]
    ? First extends unknown[]
        ? [
              ...FlattenDepth<First, Times, [...Looped, unknown]>,
              ...FlattenDepth<Rest, Times, Looped>
          ]
        : [First, ...FlattenDepth<Rest, Times, Looped>]
    : Arr

// Tests
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
