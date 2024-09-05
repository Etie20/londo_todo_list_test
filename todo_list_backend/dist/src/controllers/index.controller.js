function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
var IndexController = function IndexController() {
    "use strict";
    _class_call_check(this, IndexController);
    _define_property(this, "index", function(req, res, next) {
        try {
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    });
};
export default IndexController;

//# sourceMappingURL=index.controller.js.map