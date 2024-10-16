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
const _statecontroller = /*#__PURE__*/ _interop_require_default(require("../controllers/state.controller"));
const _validationmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/validation.middleware"));
const _statedto = require("../dtos/state.dto");
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
let StateRoute = class StateRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.stateController.getState);
        this.router.post(`${this.path}`, (0, _validationmiddleware.default)(_statedto.CreateBaseDto, 'body'), this.stateController.createState);
    }
    constructor(){
        _define_property(this, "path", '/state');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "stateController", new _statecontroller.default());
        this.initializeRoutes();
    }
};
const _default = StateRoute;

//# sourceMappingURL=state.route.js.map