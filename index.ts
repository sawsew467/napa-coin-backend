import { ErrorType } from './src/middlewares/errorHandler';

require('dotenv').config();

const authRoute = require('./src/routes/authRoute');
const usersRoute = require('./src/routes/usersRoute');
const socialRoute = require('./src/routes/socialRoute');
const majorRoute = require('./src/routes/majorRoute');
const departmentRoute = require('./src/routes/departmentRoute');
const positionRoute = require('./src/routes/positionRoute');
const verifyTokenRoute = require('./src/routes/verifyTokenRoute');
const profileRoute = require('./src/routes/profileRoute');
const leetcodeRoute = require('./src/routes/leetcodeRoute');
const imageActivityRoute = require('./src/routes/imageActivityRoute');
const projectRoute = require('./src/routes/projectRoute');
const albumRoute = require('./src/routes/albumRoute');
const { errorHandler } = require('./src/middlewares/errorHandler');

const { connectDB } = require('./src/config/db');

connectDB();

import express from 'express';
import cors from 'cors';

const app = express();
const server = require('http').Server(app);
const port = process.env.APP_PORT || 5000;

app.use(cors());

app.use(express.json());

app.post('/api/v1/check-ip', (req, res) => {
    console.log(req.body);

    res.json(req.body);
});

app.use('/', authRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/edit-profile', profileRoute);

app.use('/api/v1/social', socialRoute);
app.use('/api/v1/major', majorRoute);
app.use('/api/v1/department', departmentRoute);
app.use('/api/v1/position', positionRoute);
app.use('/api/v1/verifyToken', verifyTokenRoute);
app.use('/api/v1/leetcode', leetcodeRoute);
app.use('/api/v1/image-activity', imageActivityRoute);
app.use('/api/v1/project', projectRoute);
app.use('/api/v1/album', albumRoute);

app.all('*', (req, res, next) => {
    const err: ErrorType = new Error('Unhandled Route');
    err.statusCode = 404;
    next(err);
});

// app.use((error: any, req: any, res: any, next: any) => {
//     error.statusCode = error.statusCode || 500; // Changed to 500 for a more appropriate default error code
//     error.status = error.status || 'error';

//     res.status(error.statusCode).json({
//         status: error.status,
//         message: error.message,
//     });
// });

app.use('/api/v1/', errorHandler);

import { socketServer } from './src/socket';
import swaggerDocs from './src/Utils/swagger';
socketServer.init(server);
socketServer.onConnection();
server.listen(port, () => {
    console.log(`connected to port successfully http://localhost:${port}/ `);

    swaggerDocs(app, Number(port));
});
