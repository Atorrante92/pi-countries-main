const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getCountryById = async(id) => {
    const country = await Country.findByPk(id, 
        {include: {
            model: Activity,
            attributes: ['name', 'season'],
            as: 'Activities',
            through: {
                attributes: []
            }
        }
        });
    if(country) {
        return country;
    }
    return `El país con el ID: ${id} no existe`;
};

const getCountryByName = async(name) => {
    const countries = await Country.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` },                //El operador iLike permite buscar un patrón en strings, no distingue de mayúsculas y minúsculas
        },
    });
    if(countries.length) {
        return countries;          
    }
    return `El país con el nombre: ${name} no existe`;
};

const getAllCountries = async() => {
    const countries = await Country.findAll();
    return countries;
};

module.exports = {
    getCountryById,
    getCountryByName,
    getAllCountries
};