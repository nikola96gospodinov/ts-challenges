export type Mutable<T> = {
    -readonly [Key in keyof T]: T[Key]
}

// Tests
interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
