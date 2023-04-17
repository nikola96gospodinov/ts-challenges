export type ConstructTuple<
    Length extends number,
    Result extends unknown[] = []
> = Result['length'] extends Length
    ? Result
    : ConstructTuple<Length, [...Result, unknown]>

// Tests
type result = ConstructTuple<2> // expect to be [unknown, unkonwn]
