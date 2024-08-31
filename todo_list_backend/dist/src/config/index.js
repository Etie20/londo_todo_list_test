import { config } from 'dotenv';
config({
    path: ".env.".concat(process.env.NODE_ENV || 'development', ".local")
});
export var CREDENTIALS = process.env.CREDENTIALS === 'true';
var _process_env = process.env;
export var NODE_ENV = _process_env.NODE_ENV, PORT = _process_env.PORT, DB_HOST = _process_env.DB_HOST, DB_PORT = _process_env.DB_PORT, DB_DATABASE = _process_env.DB_DATABASE, SECRET_KEY = _process_env.SECRET_KEY, LOG_FORMAT = _process_env.LOG_FORMAT, LOG_DIR = _process_env.LOG_DIR, ORIGIN = _process_env.ORIGIN;

//# sourceMappingURL=index.js.map