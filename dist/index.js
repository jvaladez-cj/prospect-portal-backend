"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const app_1 = __importDefault(require("./app"));
const uri = "mongodb+srv://admintest:Credijusto2021@mylittlecluster.fogrj.mongodb.net/veterinaria?retryWrites=true&w=majority";
mongoose_1.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(db => {
    console.log("Db is conected to " + db.connection.host);
    app_1.default.listen(app_1.default.get("port"), () => {
        console.log("Server is running");
    });
});
