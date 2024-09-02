export interface Task {
    _id: string,
    name: string,
    description: string,
    state: TaskState,
}

export type TaskState = "TODO" | "DONE";