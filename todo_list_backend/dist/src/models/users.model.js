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
const userSchema = new _mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});
const userModel = (0, _mongoose.model)('User', userSchema);
const _default = userModel;

//# sourceMappingURL=users.model.js.map