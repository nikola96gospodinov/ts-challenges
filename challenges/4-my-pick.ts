export type MyPick<T, K extends keyof T> = {
    [Key in K]: T[Key]
}

// Tests
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'> // { title: 'Clean room'; completed: false }
