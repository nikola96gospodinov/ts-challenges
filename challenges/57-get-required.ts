export type GetRequired<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

type I = GetRequired<{ foo: number; bar?: string }> // expected to be { foo: number }
