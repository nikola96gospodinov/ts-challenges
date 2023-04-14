export type GetOptional<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}

type I = GetOptional<{ foo: number; bar?: string }> // expected to be { bar?: string }
