import { model, Schema } from 'mongoose';
var taskSchema = new Schema({
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
var taskModel = model('Task', taskSchema);
export default taskModel;

//# sourceMappingURL=task.model.js.map