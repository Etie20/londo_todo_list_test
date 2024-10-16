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
const _categorymodel = /*#__PURE__*/ _interop_require_default(require("../models/category.model"));
const _classvalidator = require("class-validator");
const _HttpException = require("../exceptions/HttpException");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
let CategoryService = class CategoryService {
    async findAllCategories() {
        return this.category.find();
    }
    async createCategory(categoryData) {
        if ((0, _classvalidator.isEmpty)(categoryData)) throw new _HttpException.HttpException(400, "categoryData is empty");
        return this.category.create(_object_spread({}, categoryData));
    }
    constructor(){
        _define_property(this, "category", _categorymodel.default);
    }
};
const _default = CategoryService;

//# sourceMappingURL=category.service.js.map