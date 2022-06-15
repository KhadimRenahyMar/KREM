const sequelize = require('../../database');
import { Model, DataTypes } from "sequelize";

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

interface Tag {
    id: number,
    name: string,
    type: string,
    category: string,
};

export default Tag;