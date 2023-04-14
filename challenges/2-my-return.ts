export type MyReturnType<T extends Function> = T extends (
    ...args: any
) => infer U
    ? U
    : never

// Tests
const fn = (v: boolean) => {
    if (v) return 1
    else return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"
