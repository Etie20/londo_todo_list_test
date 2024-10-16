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
const _jsonwebtoken = require("jsonwebtoken");
const _config = require("../config");
const _HttpException = require("../exceptions/HttpException");
const _usersmodel = /*#__PURE__*/ _interop_require_default(require("../models/users.model"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const authMiddleware = async (req, res, next)=>{
    try {
        const Authorization = req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null;
        if (Authorization) {
            const secretKey = _config.SECRET_KEY;
            const verificationResponse = (0, _jsonwebtoken.verify)(Authorization, secretKey);
            const userId = verificationResponse._id;
            const findUser = await _usersmodel.default.findById(userId);
            if (findUser) {
                req.user = findUser;
                next();
            } else {
                next(new _HttpException.HttpException(401, 'Wrong authentication token'));
            }
        } else {
            next(new _HttpException.HttpException(404, 'Authentication token missing'));
        }
    } catch (error) {
        next(new _HttpException.HttpException(401, `Wrong authentication token`));
    }
};
const _default = authMiddleware;

//# sourceMappingURL=auth.middleware.js.map