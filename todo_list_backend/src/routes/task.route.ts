import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import TaskController from "@controllers/task.controller";

class TaskRoute implements Routes {
    public path = '/task';
    public router: Router = Router();
    public taskController = new TaskController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.taskController.getTasks);
    }
}

export default TaskRoute;