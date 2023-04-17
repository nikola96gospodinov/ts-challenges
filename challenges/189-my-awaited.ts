export type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
    ? U extends Promise<unknown>
        ? MyAwaited<U>
        : U
    : never

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
