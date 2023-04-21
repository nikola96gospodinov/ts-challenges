export type PickByType<T, U> = {
    [Key in keyof T as U extends T[Key] ? Key : never]: T[Key]
}

// Tests
type OnlyBoolean = PickByType<
    {
        name: string
        count: number
        isReadonly: boolean
        isEnable: boolean
    },
    boolean
> // { isReadonly: boolean; isEnable: boolean; }
