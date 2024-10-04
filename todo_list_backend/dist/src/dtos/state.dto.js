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
export var CreateBaseDto = function CreateBaseDto() {
    "use strict";
    _class_call_check(this, CreateBaseDto);
    _define_property(this, "name", void 0);
};

//# sourceMappingURL=state.dto.js.map