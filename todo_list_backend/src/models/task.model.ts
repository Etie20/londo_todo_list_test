import { model, Schema, Document } from 'mongoose';
import {Task} from "@interfaces/task.interface";
// @ts-ignore
import * as mongoose from "mongoose";

const taskSchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    created_at: {
        type: String,
        require: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State',
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: false
    }
});

const taskModel = model<Task & Document>('Task', taskSchema);

export default taskModel;