"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dbConnection", {
    enumerable: true,
    get: function() {
        return dbConnection;
    }
});
const _config = require("../config");
const dbConnection = {
    url: `mongodb+srv://${_config.DB_USER}:${_config.DB_PASSWORD}@cluster0.unj3djg.mongodb.net/${_config.DB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};

//# sourceMappingURL=index.js.map