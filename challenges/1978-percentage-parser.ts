export type PercentageParser<T extends string> =
    T extends `${infer First}${infer Rest}`
        ? [
              First extends '-' | '+' ? First : '',
              Rest extends `${infer Number}${'%'}`
                  ? First extends '-' | '+'
                      ? Number
                      : `${First}${Number}`
                  : First extends '-' | '+'
                  ? Rest
                  : T,
              Rest extends `${string}${'%'}` ? '%' : ''
          ]
        : ['', '', '']

// Tests
type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = PercentageParser<PString1> // expected ['', '', '']
type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
type R5 = PercentageParser<PString5> // expected ["", "85", ""]
