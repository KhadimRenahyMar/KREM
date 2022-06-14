// const { Model, Datatypes } = require('sequelize');
// const sequelize = require('../database');

import { Model, DataTypes } from "sequelize";
import sequelize from "../database";

class Tech extends Model {};

Tech.init(
    {
        fullname: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        shortname: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        logo: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        tableName: 'techs',
    }
);

export default Tech;