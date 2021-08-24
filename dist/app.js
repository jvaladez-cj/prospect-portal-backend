"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// init
const app = express_1.default();
// settings
app.set('port', process.env.PORT || 4000);
// middlewares
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
exports.default = app;
