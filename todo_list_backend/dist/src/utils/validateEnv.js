import { cleanEnv, port, str } from 'envalid';
var validateEnv = function() {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port()
    });
};
export default validateEnv;

//# sourceMappingURL=validateEnv.js.map