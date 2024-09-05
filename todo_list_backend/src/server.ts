import App from '@/app';
import validateEnv from "@utils/validateEnv";
import IndexRoute from "@routes/index.route";
import TaskRoute from "@routes/task.route";
import StateRoute from "@routes/state.route";
import CategoryRoute from "@routes/category.route";
import AuthRoute from "@routes/auth.route";

validateEnv();

const app = new App([new IndexRoute(), new TaskRoute(), new StateRoute(), new CategoryRoute(), new AuthRoute()]);

app.listen();

