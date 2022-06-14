// const { Model, Datatypes } = require('sequelize');
// const sequelize = require('../database');

import { Model, DataTypes } from "sequelize";
import sequelize from "../database";

class Tag extends Model {};

Tag.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        type: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        category: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'tags',
    }
);

export default Tag;