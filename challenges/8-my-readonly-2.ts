export type MyReadonlyKeys<T, K extends keyof T> = {
    readonly [Key in K as Key extends K ? Key : never]: T[Key]
} & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
}

// Tests
interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo: MyReadonlyKeys<Todo, 'title' | 'description'> = {
    title: 'Hey',
    description: 'foobar',
    completed: false
}

// todo.title = 'Hello' // Error: cannot reassign a readonly property
// todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK
