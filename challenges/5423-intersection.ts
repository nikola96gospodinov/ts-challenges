export type Intersection<T extends unknown[]> = T extends [
    infer Head,
    ...infer Tail
]
    ? (Head extends unknown[] ? Head[number] : Head) & Intersection<Tail>
    : unknown

// Tests
type Res = Intersection<[[1, 2], [2, 3], [2, 2]]> // expected to be 2
type Res1 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]> // expected to be 2 | 3
type Res2 = Intersection<[[1, 2], [3, 4], [5, 6]]> // expected to be never
type Res3 = Intersection<[[1, 2, 3], [2, 3, 4], 3]> // expected to be 3
type Res4 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]> // expected to be 2 | 3
type Res5 = Intersection<[[1, 2, 3], 2, 3]> // expected to be never
