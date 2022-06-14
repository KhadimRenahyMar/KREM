// const { Model, Datatypes } = require('sequelize');
// const sequelize = require('../database');

import { Model, DataTypes } from "sequelize";
import sequelize from "../database";

class Text extends Model {};

Text.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        text: {
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
        tableName: 'texts',
    }
);

export default Text;