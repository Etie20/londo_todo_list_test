function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import TaskService from "@services/task.service";
import { SECRET_KEY } from "@config";
import { verify } from "jsonwebtoken";
var TaskController = function TaskController() {
    "use strict";
    _class_call_check(this, TaskController);
    var _this = this;
    _define_property(this, "taskService", new TaskService());
    _define_property(this, "getTasks", /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(req, res, next) {
            var Authorization, secretKey, verificationResponse, userId, findAllTasksData, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        Authorization = req.header('Authorization').split('Bearer ')[1];
                        secretKey = SECRET_KEY;
                        verificationResponse = verify(Authorization, secretKey);
                        userId = verificationResponse._id;
                        return [
                            4,
                            _this.taskService.findAllTask(userId)
                        ];
                    case 1:
                        findAllTasksData = _state.sent();
                        res.status(200).json({
                            data: findAllTasksData,
                            message: "findAll"
                        });
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        next(error);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function(req, res, next) {
            return _ref.apply(this, arguments);
        };
    }());
    _define_property(this, "createTask", /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(req, res, next) {
            var createTaskData, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            _this.taskService.createTask(req.body)
                        ];
                    case 1:
                        createTaskData = _state.sent();
                        res.status(200).json({
                            data: createTaskData,
                            message: "create"
                        });
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        next(error);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function(req, res, next) {
            return _ref.apply(this, arguments);
        };
    }());
    _define_property(this, "deleteTask", /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(req, res, next) {
            var error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            _this.taskService.deleteTask(req.params.id)
                        ];
                    case 1:
                        _state.sent();
                        res.status(200).json({
                            message: "delete"
                        });
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        next(error);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function(req, res, next) {
            return _ref.apply(this, arguments);
        };
    }());
    _define_property(this, "updateTask", /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(req, res, next) {
            var updateTaskData, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            _this.taskService.updateTask(req.params.id, req.body)
                        ];
                    case 1:
                        updateTaskData = _state.sent();
                        res.status(200).json({
                            data: updateTaskData,
                            message: "update"
                        });
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        next(error);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function(req, res, next) {
            return _ref.apply(this, arguments);
        };
    }());
};
export default TaskController;

//# sourceMappingURL=task.controller.js.map