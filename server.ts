require('dotenv').config();
import path from "path";
import express from 'express';
import router from './app/routes/router';
import expressSession from 'express-session';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());      
server.use(bodyParser.urlencoded({extended: true}));
server.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: 'Guess it',
    cookie: {
        secure: true,
        maxAge: (1000 * 60 / 60),
    }
}));

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
    console.log(process.env.NODE_ENV);
    server.use(express.static(path.join(__dirname, 'client/build')));
} else {
    console.log(process.env.NODE_ENV);
    // server.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });
}

server.use(router);

server.listen(PORT, () => {
    console.log(`Server launched on http://localhost:${PORT}`);
});

module.exports = server;