import CategoryService from "@services/category.service";
import {NextFunction, Request, Response} from "express";
import {Base} from "@interfaces/base.interface";

class CategoryController {
    public categoryService = new CategoryService();

    public getCategories = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllCategoriesData: Base[] = await this.categoryService.findAllCategories();
            res.status(200).json({ data: findAllCategoriesData, message: "findAll" })
        } catch (error) {
            next(error);
        }
    }

    public createCategory = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryData: Base = req.body;
            const createCategoryData: Base = await this.categoryService.createCategory(categoryData);
            res.status(200).json({ data: createCategoryData, message: "create" })
        } catch (error) {
            next(error);
        }
    }
}

export default CategoryController;