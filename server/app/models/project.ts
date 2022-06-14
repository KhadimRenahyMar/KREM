// const { Model, Datatypes } = require('sequelize');
// const sequelize = require('../database');

import { Model, DataTypes } from "sequelize";
import sequelize from "../database";

class Project extends Model {};

Project.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        githubLink: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        siteLink: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        projectSize: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        cover: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        tableName: 'projects',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
);

export default Project;