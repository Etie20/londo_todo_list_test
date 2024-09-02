import TaskService from "@services/task.service";
import {NextFunction, Request, Response} from "express";
import {Task} from "@interfaces/task.interface";

class TaskController {
    public taskService = new TaskService();

    public getTasks = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllTasksData: Task[] = await this.taskService.findAllTask();
            res.status(200).json({ data: findAllTasksData, message: "findAll"});
        } catch (error) {
            next(error);
        }
    }
}

export default TaskController;