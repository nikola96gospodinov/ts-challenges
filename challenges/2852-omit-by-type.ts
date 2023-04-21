export type OmitByType<T, U> = {
    [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]
}

// Tests
type OmitBoolean = OmitByType<
    {
        name: string
        count: number
        isReadonly: boolean
        isEnable: boolean
    },
    boolean
> // { name: string; count: number }
