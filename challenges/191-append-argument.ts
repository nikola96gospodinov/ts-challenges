export type AppendArgument<Fn extends Function, NewArgument> = Fn extends (
    ...args: infer Arguments
) => infer ReturnValue
    ? (...args: [...Arguments, NewArgument]) => ReturnValue
    : Fn

// Tests
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// expected be (a: number, b: string, x: boolean) => number
