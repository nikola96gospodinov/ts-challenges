import { CamelCase } from './114-camel-case'

type Camelize<Obj> = Obj extends unknown[]
    ? [Camelize<Obj[number]>]
    : {
          [Key in keyof Obj as Key extends string
              ? `${CamelCase<Key>}`
              : Key]: Obj[Key] extends Record<string, any>
              ? Camelize<Obj[Key]>
              : Obj[Key]
      }

// Tests
type a = Camelize<{
    some_prop: string
    prop: { another_prop: string }
    array: [{ snake_case: string }]
}>

// expected to be
// {
//   someProp: string,
//   prop: { anotherProp: string },
//   array: [{ snakeCase: string }]
// }
