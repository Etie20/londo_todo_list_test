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
import express from 'express';
import { NODE_ENV, PORT } from "./config";
import { logger } from "@utils/logger";
var App = /*#__PURE__*/ function() {
    "use strict";
    function App() {
        _class_call_check(this, App);
        _define_property(this, "app", void 0);
        _define_property(this, "env", void 0);
        _define_property(this, "port", void 0);
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;
    }
    _create_class(App, [
        {
            key: "listen",
            value: function listen() {
                var _this = this;
                this.app.listen(this.port, function() {
                    logger.info("=================================");
                    logger.info("======= ENV: ".concat(_this.env, " ======="));
                    logger.info("\uD83D\uDE80 App listening on the port ".concat(_this.port));
                    logger.info("=================================");
                });
            }
        }
    ]);
    return App;
}();
export default App;

//# sourceMappingURL=app.js.map