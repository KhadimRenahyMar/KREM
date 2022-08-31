require('dotenv').config();
import path from "path";
import express from 'express';
import router from './app/routes/router';
import bodyParser from 'body-parser';
import { v2 as cloudinary } from 'cloudinary';
// import cors from 'cors';
const cors = require('cors');
import cookieSession from 'cookie-session';
import process from "process";
import compression from 'compression';

import { Request, Response } from "express";

const server = express();
server.use(compression())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.set('trust proxy', 1);

server.use(cookieSession({
    name: 'session',
    keys: [
        'Guess it',
    ],
    maxAge: 31536000,
    secure: true,
}));

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
    console.log(process.env.NODE_ENV);
    server.use(express.static(path.join(__dirname, 'client/dist'), {
        setHeaders: (res, path) => {
            res.setHeader('Cache-Control', 'max-age=31536000'),
            res.setHeader('Accept-Encoding', 'gzip')
        }
    }));
}
else {
    server.use(express.static(path.join(__dirname, 'client/build'), {
        setHeaders: (res, path) => {
            res.setHeader('Cache-Control', 'max-age=31536000'),
            res.setHeader('Accept-Encoding', 'gzip')
        }
    }));
}
server.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}));

cloudinary.config({
    cloud_name: 'ddjt1r39a',
    api_key: '512287651845544',
    api_secret: 'iupiA09gV1msrw4-BbQjHqHGd9A'
});

if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
    console.warn('!! cloudinary config is undefined !! --> export CLOUDINARY_URL or set dotenv file');
}

server.use(router);
server.get('/*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "client/dist", 'index.html'), (error) => {
        if (error) {
            res.status(500).send(error)
        }
    })
})
server.listen(PORT, () => {
    console.log(`Server launched on http://localhost:${PORT}`);
});

process.on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
})

process.on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
});

module.exports = server;