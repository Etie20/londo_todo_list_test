import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import StateController from "@controllers/state.controller";
import validationMiddleware from "@middlewares/validation.middleware";
import {CreateBaseDto} from "@dtos/state.dto";

class StateRoute implements Routes {
    public path = '/state';
    public router: Router = Router();
    public stateController = new StateController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.stateController.getState);
        this.router.post(`${this.path}`, validationMiddleware(CreateBaseDto, 'body'), this.stateController.createState);
    }
}

export default StateRoute;