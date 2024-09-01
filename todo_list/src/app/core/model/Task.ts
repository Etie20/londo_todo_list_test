export interface Task {
    name: string,
    state: "TODO" | "DONE",
    category: "WORK" | "PERSONAL" | "STUDY"
}
