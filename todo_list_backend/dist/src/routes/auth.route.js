function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
var AuthRoute = /*#__PURE__*/ function() {
    "use strict";
    function AuthRoute() {
        _class_call_check(this, AuthRoute);
        _define_property(this, "path", '/auth/');
        _define_property(this, "router", Router());
        _define_property(this, "authController", new AuthController());
        this.initializeRoutes();
    }
    _create_class(AuthRoute, [
        {
            key: "initializeRoutes",
            value: function initializeRoutes() {
                this.router.post("".concat(this.path, "signup"), validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
                this.router.post("".concat(this.path, "login"), validationMiddleware(CreateUserDto, 'body'), this.authController.logIn);
                this.router.post("".concat(this.path, "logout"), authMiddleware, this.authController.logOut);
            }
        }
    ]);
    return AuthRoute;
}();
export default AuthRoute;

//# sourceMappingURL=auth.route.js.map