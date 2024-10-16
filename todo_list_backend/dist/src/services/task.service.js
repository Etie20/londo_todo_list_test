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
const _taskmodel = /*#__PURE__*/ _interop_require_default(require("../models/task.model"));
const _HttpException = require("../exceptions/HttpException");
const _classvalidator = require("class-validator");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
let TaskService = class TaskService {
    async findAllTask(userId) {
        return this.task.find().where('user', userId).populate('state').populate('category').populate('user');
    }
    async createTask(taskData) {
        if ((0, _classvalidator.isEmpty)(taskData)) throw new _HttpException.HttpException(400, "taskData is empty");
        return this.task.create(_object_spread({}, taskData));
    }
    async updateTask(taskId, taskData) {
        if ((0, _classvalidator.isEmpty)(taskData)) throw new _HttpException.HttpException(400, "taskData is empty");
        return this.task.findByIdAndUpdate(taskId, _object_spread({}, taskData));
    }
    async deleteTask(taskId) {
        return this.task.findByIdAndDelete(taskId);
    }
    constructor(){
        _define_property(this, "task", _taskmodel.default);
    }
};
const _default = TaskService;

//# sourceMappingURL=task.service.js.map