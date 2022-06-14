require('dotenv').config();
import path from "path";
import express from 'express';
import router from './routes/router';

const server = express();
const PORT = process.env.PORT || 3000;
const pathToStatic =  path.resolve(__dirname, '../public');
server.use(express.static(pathToStatic));
server.use(express.static(path.join(__dirname, 'build')))

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  
server.use(router);

server.listen(PORT, ()=>{
    console.log(`Server launched on http://localhost:${PORT}`);
});