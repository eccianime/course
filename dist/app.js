"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const colors_1 = __importDefault(require("colors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const hpp_1 = __importDefault(require("hpp"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
// import https from 'https';
const http_1 = __importDefault(require("http"));
const error_1 = __importDefault(require("./middleware/error"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, '/config/config.env') });
const auth_1 = __importDefault(require("./routes/auth"));
const course_1 = __importDefault(require("./routes/course"));
const contents_1 = __importDefault(require("./routes/contents"));
const notFound_1 = __importDefault(require("./routes/notFound"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const app = (0, express_1.default)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbConnection_1.default.authenticate();
        console.log(colors_1.default.green.bold('Conectado ao servidor com sucesso.'));
    }
    catch (error) {
        console.log(colors_1.default.red.inverse.bold('Erro ao tentar conectar ao servidor'));
        console.log(error);
    }
}))();
app.use(express_1.default.json({ limit: '50mb' }));
app.use((0, express_fileupload_1.default)());
app.use((0, helmet_1.default)());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use((0, express_rate_limit_1.default)({
    windowMs: 10 * 60 * 1000,
    max: 1000,
}));
app.use((0, hpp_1.default)());
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
app.use('/v1/contents', contents_1.default);
app.use('/v1/courses', course_1.default);
app.use('/v1/auth', auth_1.default);
app.use('/', notFound_1.default);
app.use(error_1.default);
const PORT = process.env.PORT || 8080;
// const SECURE_PORT = process.env.PORT || 8000;
const server = http_1.default.createServer(app);
server.listen(PORT, () => console.log(colors_1.default.yellow.bold(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] Servidor executando em modo ${process.env.NODE_ENV} no porto ${PORT}`)));
process.on('unhandledRejection', (error) => {
    console.log(colors_1.default.red.inverse(`Error: ${error.message}`));
    server.close(() => process.exit(1));
});
