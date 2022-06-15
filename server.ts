require('dotenv').config();
import path from "path";
import express from 'express';
import router from './app/routes/router';

const server = express();
const PORT = process.env.PORT || 3000;

if(process.env.NODE_ENV === "production") {
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
// server.use((req, res) =>{
//     res.status(404).redirect('/404');
// })

// server.use((req, res) =>{
    //test
//     res.status(404).sendFile(path.join(__dirname, 'client/build/index.html));
// })

server.listen(PORT, ()=>{
    console.log(`Server launched on http://localhost:${PORT}`);
});