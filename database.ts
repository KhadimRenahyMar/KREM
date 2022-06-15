const { Sequelize } = require('sequelize');
require('dotenv').config();

const devConfig = process.env.PG_URL;
const prodConfig = process.env.DATABASE_URL;

const client = new Sequelize(process.env.NODE_ENV === "production" ? prodConfig : devConfig, {
    define: {
        timestamps: false,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
});

module.exports = client;
