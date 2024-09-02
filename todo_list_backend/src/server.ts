import App from '@/app';
import validateEnv from "@utils/validateEnv";
import IndexRoute from "@routes/index.route";
import TaskRoute from "@routes/task.route";

validateEnv();

const app = new App([new IndexRoute(), new TaskRoute()]);

app.listen();

