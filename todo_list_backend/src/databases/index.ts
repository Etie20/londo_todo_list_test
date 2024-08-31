import { DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';

export const dbConnection = {
    url: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.unj3djg.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};