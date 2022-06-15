const { Sequelize } = require('sequelize');
require('dotenv').config();

const devConfig = process.env.PG_URL;
const prodConfig = process.env.DATABASE_URL;

if(process.env.NODE_ENV === "production"){
    const client = new Sequelize(prodConfig, {
        logging: false,
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },    
        define: {
            timestamps: false,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    });
    module.exports = client;    
} else {
    const client = new Sequelize(devConfig, {
        define: {
            timestamps: false,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    });
    module.exports = client;
}