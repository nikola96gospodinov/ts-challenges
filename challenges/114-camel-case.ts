export type CamelCase<
    Str extends string,
    WordsIterated extends unknown[] = []
> = Str extends `${infer FirstWord}_${infer Rest}`
    ? WordsIterated['length'] extends 0
        ? `${Lowercase<FirstWord>}${CamelCase<
              Rest,
              [unknown, ...WordsIterated]
          >}`
        : `${Capitalize<Lowercase<FirstWord>>}${CamelCase<
              Rest,
              [unknown, ...WordsIterated]
          >}`
    : WordsIterated['length'] extends 0
    ? Str
    : Capitalize<Lowercase<Str>>
