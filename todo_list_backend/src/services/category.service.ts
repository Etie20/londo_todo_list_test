import { Base } from "@/interfaces/base.interface";
import CategoryModel from "@models/category.model";
import {CreateBaseDto} from "@dtos/state.dto";
import {isEmpty} from "class-validator";
import {HttpException} from "@exceptions/HttpException";

class CategoryService {
    public category = CategoryModel;

    public async findAllCategories(): Promise<Base[]> {
        return this.category.find();
    }

    public async createCategory(categoryData: CreateBaseDto): Promise<Base> {
        if (isEmpty(categoryData)) throw new HttpException(400, "categoryData is empty");
        return this.category.create({...categoryData})
    }
}

export default CategoryService;