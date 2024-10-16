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
const _authcontroller = /*#__PURE__*/ _interop_require_default(require("../controllers/auth.controller"));
const _usersdto = require("../dtos/users.dto");
const _authmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/auth.middleware"));
const _validationmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/validation.middleware"));
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
let AuthRoute = class AuthRoute {
    initializeRoutes() {
        this.router.post(`${this.path}signup`, (0, _validationmiddleware.default)(_usersdto.CreateUserDto, 'body'), this.authController.signUp);
        this.router.post(`${this.path}login`, (0, _validationmiddleware.default)(_usersdto.CreateUserDto, 'body'), this.authController.logIn);
        this.router.post(`${this.path}logout`, _authmiddleware.default, this.authController.logOut);
    }
    constructor(){
        _define_property(this, "path", '/auth/');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "authController", new _authcontroller.default());
        this.initializeRoutes();
    }
};
const _default = AuthRoute;

//# sourceMappingURL=auth.route.js.map