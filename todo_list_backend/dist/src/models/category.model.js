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
const _mongoose = require("mongoose");
const categorySchema = new _mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});
const categoryModel = (0, _mongoose.model)('Category', categorySchema);
const _default = categoryModel;

//# sourceMappingURL=category.model.js.map