//La función de este módulo es definir el modelo Activity.
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            },
            allowNull: false,
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
        },
    }, { timestamps: false });
};