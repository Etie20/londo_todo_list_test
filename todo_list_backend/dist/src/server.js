"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
const _validateEnv = /*#__PURE__*/ _interop_require_default(require("./utils/validateEnv"));
const _indexroute = /*#__PURE__*/ _interop_require_default(require("./routes/index.route"));
const _taskroute = /*#__PURE__*/ _interop_require_default(require("./routes/task.route"));
const _stateroute = /*#__PURE__*/ _interop_require_default(require("./routes/state.route"));
const _categoryroute = /*#__PURE__*/ _interop_require_default(require("./routes/category.route"));
const _authroute = /*#__PURE__*/ _interop_require_default(require("./routes/auth.route"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
(0, _validateEnv.default)();
const app = new _app.default([
    new _indexroute.default(),
    new _taskroute.default(),
    new _stateroute.default(),
    new _categoryroute.default(),
    new _authroute.default()
]);
app.listen();

//# sourceMappingURL=server.js.map