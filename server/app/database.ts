require('dotenv').config();

import { Sequelize } from 'sequelize';

console.log(process.env.PG_URL);
const client = new Sequelize(String(process.env.PG_URL), {
    define: {
        timestamps: false,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    }
});


export default client;