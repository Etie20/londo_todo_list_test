import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import { LOG_DIR } from '@config';
// logs dir
var logDir = join(__dirname, LOG_DIR);
if (!existsSync(logDir)) {
    mkdirSync(logDir);
}
// Define log format
var logFormat = winston.format.printf(function(param) {
    var timestamp = param.timestamp, level = param.level, message = param.message;
    return "".concat(timestamp, " ").concat(level, ": ").concat(message);
});
/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */ var logger = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }), logFormat),
    transports: [
        // debug log setting
        new winstonDaily({
            level: 'debug',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir + '/debug',
            filename: "%DATE%.log",
            maxFiles: 30,
            json: false,
            zippedArchive: true
        }),
        // error log setting
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir + '/error',
            filename: "%DATE%.log",
            maxFiles: 30,
            handleExceptions: true,
            json: false,
            zippedArchive: true
        })
    ]
});
logger.add(new winston.transports.Console({
    format: winston.format.combine(winston.format.splat(), winston.format.colorize())
}));
var stream = {
    write: function(message) {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    }
};
export { logger, stream };

//# sourceMappingURL=logger.js.map