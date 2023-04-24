export type ObjectKeyPaths<
    Obj extends unknown,
    Key extends keyof Obj = keyof Obj
> = Obj extends Record<any, unknown> | unknown[]
    ? Key extends keyof Obj & (string | number)
        ? `${Obj extends unknown[] ? `[${Key}]` | Key : Key}${
              | ''
              | `${Obj[Key] extends unknown[] ? '' | '.' : '.'}${ObjectKeyPaths<
                    Obj[Key]
                >}`}`
        : never
    : never

// Tests
type T1 = ObjectKeyPaths<{ name: string; age: number }> // expected to be 'name' | 'age'
type T2 = ObjectKeyPaths<{
    refCount: number
    person: { name: string; age: number }
}> // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'
type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }> // expected to be the superset of 'books' | 'books.0' | 'books[0]' | 'books.[0]' | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'
