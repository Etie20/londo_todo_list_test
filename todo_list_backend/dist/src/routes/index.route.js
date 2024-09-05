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
import IndexController from '@controllers/index.controller';
var IndexRoute = /*#__PURE__*/ function() {
    "use strict";
    function IndexRoute() {
        _class_call_check(this, IndexRoute);
        _define_property(this, "path", '/');
        _define_property(this, "router", Router());
        _define_property(this, "indexController", new IndexController());
        this.initializeRoutes();
    }
    _create_class(IndexRoute, [
        {
            key: "initializeRoutes",
            value: function initializeRoutes() {
                this.router.get("".concat(this.path), this.indexController.index);
            }
        }
    ]);
    return IndexRoute;
}();
export default IndexRoute;

//# sourceMappingURL=index.route.js.map