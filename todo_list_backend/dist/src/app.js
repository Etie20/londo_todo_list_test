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
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _config = require("./config");
const _mongoose = require("mongoose");
const _databases = require("./databases");
const _helmet = /*#__PURE__*/ _interop_require_default(require("helmet"));
const _hpp = /*#__PURE__*/ _interop_require_default(require("hpp"));
const _cors = /*#__PURE__*/ _interop_require_default(require("cors"));
const _compression = /*#__PURE__*/ _interop_require_default(require("compression"));
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
let App = class App {
    listen() {
        this.app.listen(this.port, ()=>{
            console.log(`=================================`);
            console.log(`======= ENV: ${this.env} =======`);
            console.log(`🚀 App listening on the port ${this.port}`);
            console.log(`=================================`);
        });
    }
    async closeDatabaseConnection() {
        try {
            await (0, _mongoose.disconnect)();
            console.log('Disconnected from MongoDB');
        } catch (error) {
            console.error('Error closing database connection:', error);
        }
    }
    async connectToDatabase() {
        if (this.env !== 'production') {
            (0, _mongoose.set)('debug', true);
        }
        await (0, _mongoose.connect)(_databases.dbConnection.url);
    }
    initializeRoutes(routes) {
        routes.forEach((route)=>{
            this.app.use('/api/v1/', route.router);
        });
    }
    initializeMiddlewares() {
        this.app.use((0, _cors.default)({
            origin: _config.ORIGIN,
            credentials: _config.CREDENTIALS
        }));
        this.app.use((0, _hpp.default)());
        this.app.use((0, _helmet.default)());
        this.app.use((0, _compression.default)());
        this.app.use(_express.default.json());
        this.app.use(_express.default.urlencoded({
            extended: true
        }));
    }
    constructor(routes){
        _define_property(this, "app", void 0);
        _define_property(this, "env", void 0);
        _define_property(this, "port", void 0);
        this.app = (0, _express.default)();
        this.env = _config.NODE_ENV || 'development';
        this.port = _config.PORT || 3000;
        this.connectToDatabase().then(()=>{
            console.log(`MongoDB is ready 😎`);
        });
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }
};
const _default = App;

//# sourceMappingURL=app.js.map