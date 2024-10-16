import express from 'express';
import {CREDENTIALS, LOG_FORMAT, NODE_ENV, ORIGIN, PORT} from "@config";
import { connect, set, disconnect } from 'mongoose';
import { dbConnection } from '@databases';
import {Routes} from "@interfaces/routes.interface";
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import compression from 'compression';



class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;

        this.connectToDatabase().then(() => {console.log(`MongoDB is ready 😎`)});
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`=================================`);
            console.log(`======= ENV: ${this.env} =======`);
            console.log(`🚀 App listening on the port ${this.port}`);
            console.log(`=================================`);
        });
    }

    public async closeDatabaseConnection(): Promise<void> {
        try {
            await disconnect();
            console.log('Disconnected from MongoDB');
        } catch (error) {
            console.error('Error closing database connection:', error);
        }
    }

    public async connectToDatabase() {
        if (this.env !== 'production') {
            set('debug', true);
        }

        await connect(dbConnection.url);
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/api/v1/', route.router);
        });
    }

    private initializeMiddlewares() {
        this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
        this.app.use(hpp());
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
}

export default App;