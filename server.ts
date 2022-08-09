require('dotenv').config();
import path from "path";
import express from 'express';
import router from './app/routes/router';
import bodyParser from 'body-parser';
import { v2 as cloudinary } from 'cloudinary';
import cors from 'cors';
import cookieSession from 'cookie-session';

const server = express();
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

server.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
    console.log(process.env.NODE_ENV);
    server.use(express.static(path.join(__dirname, 'client/build'), {
        setHeaders: (res, path) => {
            res.setHeader('Cache-Control', 'max-age=31536000')
        }
    }));
}

cloudinary.config({
    cloud_name: 'ddjt1r39a',
    api_key: '512287651845544',
    api_secret: 'iupiA09gV1msrw4-BbQjHqHGd9A'
});

if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
    console.warn('!! cloudinary config is undefined !! --> export CLOUDINARY_URL or set dotenv file');
} else {
    // console.log('cloudinary config:', cloudinary.config());
}

server.use(router);

server.listen(PORT, () => {
    console.log(`Server launched on http://localhost:${PORT}`);
});

module.exports = server;