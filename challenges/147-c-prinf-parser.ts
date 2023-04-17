type ControlsMap = {
    c: 'char'
    s: 'string'
    d: 'dec'
    o: 'oct'
    h: 'hex'
    f: 'float'
    p: 'pointer'
}

export type PrintFParser<Str extends string> =
    Str extends `${infer FirstPart}%${infer Control}${infer Rest}`
        ? Control extends keyof ControlsMap
            ? [ControlsMap[Control], ...PrintFParser<Rest>]
            : PrintFParser<Rest>
        : []

// Tests
type a = PrintFParser<'The result is %d.'>
