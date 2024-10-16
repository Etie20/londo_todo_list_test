"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _categoryservice = /*#__PURE__*/ _interop_require_default(require("../services/category.service"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let CategoryController = class CategoryController {
    constructor(){
        _define_property(this, "categoryService", new _categoryservice.default());
        _define_property(this, "getCategories", async (req, res, next)=>{
            try {
                const findAllCategoriesData = await this.categoryService.findAllCategories();
                res.status(200).json({
                    data: findAllCategoriesData,
                    message: "findAll"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createCategory", async (req, res, next)=>{
            try {
                const categoryData = req.body;
                const createCategoryData = await this.categoryService.createCategory(categoryData);
                res.status(200).json({
                    data: createCategoryData,
                    message: "create"
                });
            } catch (error) {
                next(error);
            }
        });
    }
};
const _default = CategoryController;

//# sourceMappingURL=category.controller.js.map