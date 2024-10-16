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
const _taskcontroller = /*#__PURE__*/ _interop_require_default(require("../controllers/task.controller"));
const _validationmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/validation.middleware"));
const _taskdto = require("../dtos/task.dto");
const _authmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/auth.middleware"));
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
let TaskRoute = class TaskRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, _authmiddleware.default, this.taskController.getTasks);
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_taskdto.CreateTaskDto, 'body'), this.taskController.createTask);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_taskdto.CreateTaskDto, 'body', true), this.taskController.updateTask);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, this.taskController.deleteTask);
    }
    constructor(){
        _define_property(this, "path", '/task');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "taskController", new _taskcontroller.default());
        this.initializeRoutes();
    }
};
const _default = TaskRoute;

//# sourceMappingURL=task.route.js.map