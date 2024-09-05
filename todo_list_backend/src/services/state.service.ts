import stateModel from "@models/state.model";
import {Base} from "@interfaces/base.interface";
import {CreateBaseDto} from "@dtos/state.dto";
import {isEmpty} from "class-validator";
import {HttpException} from "@exceptions/HttpException";

class StateService {
    public state = stateModel;

    public async findAllState(): Promise<Base[]> {
        return this.state.find();
    }

    public async createState(stateData: CreateBaseDto): Promise<Base> {
        if (isEmpty(stateData)) throw new HttpException(400, "stateData is empty");
        return this.state.create({...stateData});
    }
}

export default StateService;