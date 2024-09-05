import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import TaskController from "@controllers/task.controller";
import validationMiddleware from "@/middlewares/validation.middleware";
import {CreateTaskDto} from "@dtos/task.dto";
import authMiddleware from "@middlewares/auth.middleware";

class TaskRoute implements Routes {
    public path = '/task';
    public router: Router = Router();
    public taskController = new TaskController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, authMiddleware, this.taskController.getTasks);
        this.router.post(`${this.path}`, authMiddleware, validationMiddleware(CreateTaskDto, 'body'), this.taskController.createTask)
        this.router.put(`${this.path}/:id`, authMiddleware, validationMiddleware(CreateTaskDto, 'body', true),  this.taskController.updateTask);
        this.router.delete(`${this.path}/:id`, authMiddleware, this.taskController.deleteTask);
    }
}

export default TaskRoute;