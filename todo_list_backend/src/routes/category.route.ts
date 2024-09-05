import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import validationMiddleware from "@middlewares/validation.middleware";
import {CreateBaseDto} from "@dtos/state.dto";
import CategoryController from "@controllers/category.controller";

class CategoryRoute implements Routes {
    public path = '/category';
    public router: Router = Router();
    public categoryController = new CategoryController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.categoryController.getCategories);
        this.router.post(`${this.path}`, validationMiddleware(CreateBaseDto, 'body'), this.categoryController.createCategory);
    }
}

export default CategoryRoute;