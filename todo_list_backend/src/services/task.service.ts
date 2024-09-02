import taskModel from "@models/task.model";
import {Task} from "@interfaces/task.interface";

class TaskService {
    public task = taskModel;

    public async findAllTask(): Promise<Task[]> {
        return this.task.find();
    }
}

export default TaskService;