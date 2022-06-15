const sequelize = require('../../database');
import { Model, DataTypes } from "sequelize";

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
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        tableName: 'screenshots',
    }
);

interface Screenshot {
    id: number,
    project_id: number,
    url: string,
    position: number,
};

export default Screenshot;