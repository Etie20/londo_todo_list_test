import taskModel from "@models/task.model";
import {Task} from "@interfaces/task.interface";
import {HttpException} from "@exceptions/HttpException";
import {isEmpty} from "class-validator";
import {CreateTaskDto} from "@dtos/task.dto";

class TaskService {
    public task = taskModel;

    public async findAllTask(userId: string): Promise<Task[]> {
        return this.task.find().where('user', userId).populate('state').populate('category').populate('user');
    }

    public async createTask(taskData: CreateTaskDto): Promise<Task> {
        if (isEmpty(taskData)) throw new HttpException(400, "taskData is empty");
        const newTask: Task = await this.task.create({...taskData});
        return this.task.findById(newTask._id).populate('state').populate('category').populate('user');
    }

    public async updateTask(taskId: string, taskData: CreateTaskDto): Promise<Task> {
        if (isEmpty(taskData)) throw new HttpException(400, "taskData is empty");

        return this.task.findByIdAndUpdate(taskId, {...taskData}, {new: true}).populate('state').populate('category').populate('user');
    }

    public async deleteTask(taskId: string): Promise<void> {
        return this.task.findByIdAndDelete(taskId);
    }
}

export default TaskService;