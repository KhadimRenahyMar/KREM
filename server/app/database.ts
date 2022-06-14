const { Sequelize } = require('sequelize');

const client = new Sequelize(process.env.PG_URL, {
    define: {
        timestamps: false,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
});

module.exports = client;