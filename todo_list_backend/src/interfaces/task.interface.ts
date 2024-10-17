import {Base} from "@interfaces/base.interface";

export interface Task {
    _id: string,
    name: string,
    description: string,
    state: Base,
    category: Base,
    created_at: Date,
    updated_at: Date
}