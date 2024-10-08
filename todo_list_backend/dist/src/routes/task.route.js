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
import { Router } from "express";
import TaskController from "@controllers/task.controller";
import validationMiddleware from "@/middlewares/validation.middleware";
import { CreateTaskDto } from "@dtos/task.dto";
import authMiddleware from "@middlewares/auth.middleware";
var TaskRoute = /*#__PURE__*/ function() {
    "use strict";
    function TaskRoute() {
        _class_call_check(this, TaskRoute);
        _define_property(this, "path", '/task');
        _define_property(this, "router", Router());
        _define_property(this, "taskController", new TaskController());
        this.initializeRoutes();
    }
    _create_class(TaskRoute, [
        {
            key: "initializeRoutes",
            value: function initializeRoutes() {
                this.router.get("".concat(this.path), authMiddleware, this.taskController.getTasks);
                this.router.post("".concat(this.path), authMiddleware, validationMiddleware(CreateTaskDto, 'body'), this.taskController.createTask);
                this.router.put("".concat(this.path, "/:id"), authMiddleware, validationMiddleware(CreateTaskDto, 'body', true), this.taskController.updateTask);
                this.router.delete("".concat(this.path, "/:id"), authMiddleware, this.taskController.deleteTask);
            }
        }
    ]);
    return TaskRoute;
}();
export default TaskRoute;

//# sourceMappingURL=task.route.js.map