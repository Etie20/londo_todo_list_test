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
const _statemodel = /*#__PURE__*/ _interop_require_default(require("../models/state.model"));
const _classvalidator = require("class-validator");
const _HttpException = require("../exceptions/HttpException");
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
let StateService = class StateService {
    async findAllState() {
        return this.state.find();
    }
    async createState(stateData) {
        if ((0, _classvalidator.isEmpty)(stateData)) throw new _HttpException.HttpException(400, "stateData is empty");
        return this.state.create(_object_spread({}, stateData));
    }
    constructor(){
        _define_property(this, "state", _statemodel.default);
    }
};
const _default = StateService;

//# sourceMappingURL=state.service.js.map