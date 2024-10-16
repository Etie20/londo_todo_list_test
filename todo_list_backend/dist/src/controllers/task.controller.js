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
const _taskservice = /*#__PURE__*/ _interop_require_default(require("../services/task.service"));
const _config = require("../config");
const _jsonwebtoken = require("jsonwebtoken");
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
let TaskController = class TaskController {
    constructor(){
        _define_property(this, "taskService", new _taskservice.default());
        _define_property(this, "getTasks", async (req, res, next)=>{
            try {
                const Authorization = req.header('Authorization').split('Bearer ')[1];
                const secretKey = _config.SECRET_KEY;
                const verificationResponse = (0, _jsonwebtoken.verify)(Authorization, secretKey);
                const userId = verificationResponse._id;
                const findAllTasksData = await this.taskService.findAllTask(userId);
                res.status(200).json({
                    data: findAllTasksData,
                    message: "findAll"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createTask", async (req, res, next)=>{
            try {
                const createTaskData = await this.taskService.createTask(req.body);
                res.status(200).json({
                    data: createTaskData,
                    message: "create"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteTask", async (req, res, next)=>{
            try {
                await this.taskService.deleteTask(req.params.id);
                res.status(200).json({
                    message: "delete"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateTask", async (req, res, next)=>{
            try {
                const updateTaskData = await this.taskService.updateTask(req.params.id, req.body);
                res.status(200).json({
                    data: updateTaskData,
                    message: "update"
                });
            } catch (error) {
                next(error);
            }
        });
    }
};
const _default = TaskController;

//# sourceMappingURL=task.controller.js.map