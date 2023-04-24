export type TupleToNestedObject<T extends string[], U> = T extends [
    infer First,
    ...infer Rest
]
    ? {
          [Key in First extends PropertyKey
              ? First
              : never]: Rest extends string[]
              ? TupleToNestedObject<Rest, U>
              : never
      }
    : U

// Tests
type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
