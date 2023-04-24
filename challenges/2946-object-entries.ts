export type ObjectEntries<Obj, ReqObj = Required<Obj>> = {
    [Key in keyof ReqObj]: [Key, ReqObj[Key]]
}[keyof ReqObj]

// Tests
interface Model {
    name: string
    age: number
    locations: string[] | null
}
type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
