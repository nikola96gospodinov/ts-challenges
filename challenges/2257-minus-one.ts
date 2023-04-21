export type MinusOne<
    Num extends number,
    Store extends unknown[] = []
> = Num extends [...Store, unknown]['length']
    ? Store['length']
    : MinusOne<Num, [...Store, unknown]>

// Tests
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
