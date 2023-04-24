import { Reverse } from './3192-reverse'

export type FlipArguments<T extends (...args: any) => any> = (
    ...args: Reverse<Parameters<T>>
) => ReturnType<T>

// Tests
type Flipped = FlipArguments<
    (arg0: string, arg1: number, arg2: boolean) => void
>
// (arg0: boolean, arg1: number, arg2: string) => void
