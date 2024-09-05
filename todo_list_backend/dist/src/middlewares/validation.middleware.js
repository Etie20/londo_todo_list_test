import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { HttpException } from '@exceptions/HttpException';
var validationMiddleware = function(type) {
    var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'body', skipMissingProperties = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, whitelist = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, forbidNonWhitelisted = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    return function(req, res, next) {
        validate(plainToClass(type, req[value]), {
            skipMissingProperties: skipMissingProperties,
            whitelist: whitelist,
            forbidNonWhitelisted: forbidNonWhitelisted
        }).then(function(errors) {
            if (errors.length > 0) {
                var message = errors.map(function(error) {
                    return Object.values(error.constraints);
                }).join(', ');
                next(new HttpException(400, message));
            } else {
                next();
            }
        });
    };
};
export default validationMiddleware;

//# sourceMappingURL=validation.middleware.js.map