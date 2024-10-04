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
export var CreateTaskDto = function CreateTaskDto() {
    "use strict";
    _class_call_check(this, CreateTaskDto);
    _define_property(this, "name", void 0);
    _define_property(this, "description", void 0);
    _define_property(this, "state", void 0);
    _define_property(this, "category", void 0);
    _define_property(this, "created_at", void 0);
    _define_property(this, "user", void 0);
};

//# sourceMappingURL=task.dto.js.map