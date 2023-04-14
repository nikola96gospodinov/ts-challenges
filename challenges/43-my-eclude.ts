export type MyExclude<T, U> = T extends U ? never : T

// Tests
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
