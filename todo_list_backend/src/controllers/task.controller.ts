import TaskService from "@services/task.service";
import {NextFunction, Request, Response} from "express";
import {Task} from "@interfaces/task.interface";
import {SECRET_KEY} from "@config";
import {verify} from "jsonwebtoken";
import {DataStoredInToken} from "@interfaces/auth.interface";

class TaskController {
    public taskService = new TaskService();

    public getTasks = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const Authorization = req.header('Authorization').split('Bearer ')[1];

            const secretKey: string = SECRET_KEY;
            const verificationResponse = verify(Authorization, secretKey) as DataStoredInToken;
            const userId = verificationResponse._id;
            const findAllTasksData: Task[] = await this.taskService.findAllTask(userId);
            res.status(200).json({ data: findAllTasksData, message: "findAll"});
        } catch (error) {
            next(error);
        }
    }

    public createTask = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createTaskData: Task = await this.taskService.createTask(req.body);
            res.status(200).json({ data: createTaskData, message: "create" });
        } catch (error) {
            next(error);
        }
    }

    public deleteTask = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.taskService.deleteTask(req.params.id);
            res.status(200).json({ message: "delete" })
        } catch (error) {
            next(error)
        }
    }

    public updateTask = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const updateTaskData: Task = await this.taskService.updateTask(req.params.id, req.body);
            res.status(200).json({ data: updateTaskData, message: "update"});
        } catch (error) {
            next(error);
        }
    }
}

export default TaskController;