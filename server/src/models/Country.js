const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo. La función de este módulo es definir el modelo Country.
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Country', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flags: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        continents: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capital: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subregion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        area: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        population: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    }, { timestamps: false });
};