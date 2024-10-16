"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateTaskDto", {
    enumerable: true,
    get: function() {
        return CreateTaskDto;
    }
});
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
let CreateTaskDto = class CreateTaskDto {
    constructor(){
        _define_property(this, "name", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "state", void 0);
        _define_property(this, "category", void 0);
        _define_property(this, "created_at", void 0);
        _define_property(this, "user", void 0);
    }
};

//# sourceMappingURL=task.dto.js.map