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
import express from 'express';
import { CREDENTIALS, LOG_FORMAT, NODE_ENV, ORIGIN, PORT } from "@config";
import { logger, stream } from "@utils/logger";
import { connect, set, disconnect } from 'mongoose';
import { dbConnection } from '@databases';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
var App = /*#__PURE__*/ function() {
    "use strict";
    function App(routes) {
        _class_call_check(this, App);
        _define_property(this, "app", void 0);
        _define_property(this, "env", void 0);
        _define_property(this, "port", void 0);
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;
        this.connectToDatabase().then(function() {
            logger.info("MongoDB is ready \uD83D\uDE0E");
        });
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
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
        },
        {
            key: "closeDatabaseConnection",
            value: function closeDatabaseConnection() {
                return _async_to_generator(function() {
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
                                    disconnect()
                                ];
                            case 1:
                                _state.sent();
                                console.log('Disconnected from MongoDB');
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                console.error('Error closing database connection:', error);
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
                })();
            }
        },
        {
            key: "connectToDatabase",
            value: function connectToDatabase() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.env !== 'production') {
                                    set('debug', true);
                                }
                                return [
                                    4,
                                    connect(dbConnection.url)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "initializeRoutes",
            value: function initializeRoutes(routes) {
                var _this = this;
                routes.forEach(function(route) {
                    _this.app.use('/api/v1/', route.router);
                });
            }
        },
        {
            key: "initializeMiddlewares",
            value: function initializeMiddlewares() {
                this.app.use(morgan(LOG_FORMAT, {
                    stream: stream
                }));
                this.app.use(cors({
                    origin: ORIGIN,
                    credentials: CREDENTIALS
                }));
                this.app.use(hpp());
                this.app.use(helmet());
                this.app.use(compression());
                this.app.use(express.json());
                this.app.use(express.urlencoded({
                    extended: true
                }));
            }
        }
    ]);
    return App;
}();
export default App;

//# sourceMappingURL=app.js.map