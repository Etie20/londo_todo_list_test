import express from 'express';
import {NODE_ENV, PORT} from "@config";
import {logger} from "@utils/logger";
import { connect, set, disconnect } from 'mongoose';
import { dbConnection } from '@databases';
import {Routes} from "@interfaces/routes.interface";

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor() {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;

        this.connectToDatabase();
    }

    public listen() {
        this.app.listen(this.port, () => {
            logger.info(`=================================`);
            logger.info(`======= ENV: ${this.env} =======`);
            logger.info(`🚀 App listening on the port ${this.port}`);
            logger.info(`=================================`);
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
            this.app.use('/', route.router);
        });
    }
}

export default App;