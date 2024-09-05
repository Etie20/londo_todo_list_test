import StateService from "@services/state.service";
import {NextFunction, Request, Response} from "express";
import {Base} from "@interfaces/base.interface";

class StateController {
    public stateService = new StateService();

    public getState = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllStatesData: Base[] = await this.stateService.findAllState();
            res.status(200).json({ data: findAllStatesData, message: "findAll" })
        } catch (error) {
            next(error);
        }
    }

    public createState = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const stateData: Base = req.body;
            const createStateData: Base = await this.stateService.createState(stateData);
            res.status(200).json({ data: createStateData, message: "create" })
        } catch (error) {
            next(error);
        }
    }
}

export default StateController;