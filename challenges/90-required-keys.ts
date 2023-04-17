export type OptionalKeys<T> = keyof {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}

// Tests
type Result = OptionalKeys<{ foo: number; bar?: string }> // expected to be 'bar'
