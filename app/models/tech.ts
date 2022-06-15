const sequelize = require('../../database');
import { Model, DataTypes } from "sequelize";

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
        logoURL: {
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

interface Tech {
    id: number,
    fullname: string,
    shortname: string,
    logoURL: string,
};

export default Tech;