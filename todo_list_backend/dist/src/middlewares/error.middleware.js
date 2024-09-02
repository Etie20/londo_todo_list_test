import { logger } from '@utils/logger';
var errorMiddleware = function(error, req, res, next) {
    try {
        var status = error.status || 500;
        var message = error.message || 'Something went wrong';
        logger.error("[".concat(req.method, "] ").concat(req.path, " >> StatusCode:: ").concat(status, ", Message:: ").concat(message));
        res.status(status).json({
            message: message
        });
    } catch (error) {
        next(error);
    }
};
export default errorMiddleware;

//# sourceMappingURL=error.middleware.js.map