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
const _stateservice = /*#__PURE__*/ _interop_require_default(require("../services/state.service"));
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
let StateController = class StateController {
    constructor(){
        _define_property(this, "stateService", new _stateservice.default());
        _define_property(this, "getState", async (req, res, next)=>{
            try {
                const findAllStatesData = await this.stateService.findAllState();
                res.status(200).json({
                    data: findAllStatesData,
                    message: "findAll"
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createState", async (req, res, next)=>{
            try {
                const stateData = req.body;
                const createStateData = await this.stateService.createState(stateData);
                res.status(200).json({
                    data: createStateData,
                    message: "create"
                });
            } catch (error) {
                next(error);
            }
        });
    }
};
const _default = StateController;

//# sourceMappingURL=state.controller.js.map