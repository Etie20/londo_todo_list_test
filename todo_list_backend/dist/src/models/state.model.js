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
const stateSchema = new _mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});
const stateModel = (0, _mongoose.model)('State', stateSchema);
const _default = stateModel;

//# sourceMappingURL=state.model.js.map