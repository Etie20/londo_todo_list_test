import { model, Schema } from 'mongoose';
// @ts-ignore
import * as mongoose from "mongoose";
var taskSchema = new Schema({
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
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: false
    }
});
var taskModel = model('Task', taskSchema);
export default taskModel;

//# sourceMappingURL=task.model.js.map