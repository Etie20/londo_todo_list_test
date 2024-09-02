import App from '@/app';
import validateEnv from "@utils/validateEnv";
import IndexRoute from "@routes/index.route";
import TaskRoute from "@routes/task.route";
validateEnv();
var app = new App([
    new IndexRoute(),
    new TaskRoute()
]);
app.listen();

//# sourceMappingURL=server.js.map