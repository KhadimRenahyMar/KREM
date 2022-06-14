// const { Model, Datatypes } = require('sequelize');
// const sequelize = require('../database');

import { Model, DataTypes } from "sequelize";
import sequelize from "../database";

class Screenshot extends Model {};

Screenshot.init(
    {
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        tableName: 'tags',
    }
);

export default Screenshot;