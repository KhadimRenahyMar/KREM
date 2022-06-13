require('dotenv').config();
import path from "path";
import express from 'express';
import router from './routes/router';

const server = express();
const PORT = process.env.PORT || 3000;
const pathToStatic =  path.resolve(__dirname, '../public');
server.use(express.static(pathToStatic));

server.use(router);

server.listen(PORT, ()=>{
    console.log(`Server launched on http://localhost:${PORT}`);
});