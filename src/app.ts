import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import colors from 'colors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import fileupload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import errorHandler from './middleware/error';

import authRoutes from './routes/auth'
import notFoundRoute from './routes/notFound';

dotenv.config({ path: path.join(__dirname, '/config/config.env') });

const app = express();

app.use(express.json({ limit: '50mb' }))

app.use(fileupload())
app.use(helmet())
app.use(cookieParser())
app.use(cors())
app.use(rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 1000,
}));
app.use(hpp());

if( process.env.NODE_ENV === 'development' ){
    app.use(morgan('dev'));
}

app.use('/v1/auth', authRoutes);
app.use('/', notFoundRoute);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
const server = app.listen( PORT, () => console.log( colors.yellow.bold(`[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] Servidor executando em modo ${process.env.NODE_ENV} no porto ${PORT}`)) );

process.on('unhandledRejection', (error: any) => {
    console.log( colors.red.inverse(`Error: ${error.message}`));
    server.close( () => process.exit(1) );
})