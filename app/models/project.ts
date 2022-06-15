const sequelize = require('../../database');
import { Model, DataTypes } from "sequelize";

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
        repoURL: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        url: {
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

interface Project {
    id: number,
    title: string,
    repoURL: string,
    url: string,
    projectSize: string,
    desc: string,
    cover: string,
    createdAt: Date,
    updatedAt: Date,
};

export default Project;