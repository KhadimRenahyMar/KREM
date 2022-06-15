const sequelize = require('../../database');
import { Model, DataTypes } from "sequelize";

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

interface Text {
    id: number,
    project_id: number,
    title: string,
    text: string,
    position: number,
};

export default Text;