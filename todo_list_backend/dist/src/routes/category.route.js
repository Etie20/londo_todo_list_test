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
const _express = require("express");
const _validationmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/validation.middleware"));
const _statedto = require("../dtos/state.dto");
const _categorycontroller = /*#__PURE__*/ _interop_require_default(require("../controllers/category.controller"));
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
let CategoryRoute = class CategoryRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.categoryController.getCategories);
        this.router.post(`${this.path}`, (0, _validationmiddleware.default)(_statedto.CreateBaseDto, 'body'), this.categoryController.createCategory);
    }
    constructor(){
        _define_property(this, "path", '/category');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "categoryController", new _categorycontroller.default());
        this.initializeRoutes();
    }
};
const _default = CategoryRoute;

//# sourceMappingURL=category.route.js.map