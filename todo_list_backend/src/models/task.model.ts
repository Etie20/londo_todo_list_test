import { model, Schema, Document } from 'mongoose';
import {Task} from "@interfaces/task.interface";

const taskSchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    }
});

const taskModel = model<Task & Document>('Task', taskSchema);

export default taskModel;