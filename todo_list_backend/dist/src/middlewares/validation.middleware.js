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
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _HttpException = require("../exceptions/HttpException");
const validationMiddleware = (type, value = 'body', skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true)=>{
    return (req, res, next)=>{
        const validatedValue = req[value];
        console.log('Validating:', validatedValue);
        (0, _classvalidator.validate)((0, _classtransformer.plainToClass)(type, validatedValue), {
            skipMissingProperties,
            whitelist,
            forbidNonWhitelisted
        }).then((errors)=>{
            console.log('Validation errors:', errors);
            if (errors.length > 0) {
                const message = errors.map((error)=>Object.values(error.constraints)).join(', ');
                next(new _HttpException.HttpException(400, message));
            } else {
                next();
            }
        }).catch((error)=>{
            console.error('Validation error:', error);
            next(new _HttpException.HttpException(500, 'Internal Server Error'));
        });
        req.on('error', (err)=>{
            console.error('Request error:', err);
            next(new _HttpException.HttpException(500, 'An unexpected error occurred'));
        });
    };
};
const _default = validationMiddleware;

//# sourceMappingURL=validation.middleware.js.map