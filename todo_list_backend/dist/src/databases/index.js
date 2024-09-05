import { DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
export var dbConnection = {
    url: "mongodb+srv://".concat(DB_USER, ":").concat(DB_PASSWORD, "@cluster0.unj3djg.mongodb.net/").concat(DB_DATABASE, "?retryWrites=true&w=majority&appName=Cluster0"),
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};

//# sourceMappingURL=index.js.map