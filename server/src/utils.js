const axios = require('axios');
const { Country } = require('./db');

const cleanPropsCountries = (arr) => {
    const newArr = arr.map((country) => {
        return {
            id: country.cca3,
            name: country.name.common,
            flags: country.flags.png,
            continents: country.continents[0],
            capital: Array.isArray(country.capital) && country.capital.length ? country.capital[0] : 'No tiene capital',
            subregion: country.subregion,
            area: country.area,
            population: country.population
        }
    });
    return newArr;
};

const getCountriesApi = async() => {
    const countriesDatabase = await Country.findAll();
    if(!countriesDatabase.length) {
        const apiCountriesRaw = (await axios.get('http://localhost:5000/countries')).data;
        const apiCountries = cleanPropsCountries(apiCountriesRaw);
        //console.log(apiCountries);
        apiCountries.forEach(async(country) => {
            await Country.create({ 
            id: country.id,
            name: country.name,
            flags: country.flags,
            continents: country.continents,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population
            });
        });
    }
};

const validate = (req, res, next) => {                                                  //Esta función sería un Middleware
    const { name, difficulty, duration, season, countries } = req.body;

    if(!name) return res.status(400).json({ error: 'Falta la propiedad name' });        //Uso return para cortar aquí
    if(!difficulty) return res.status(400).json({ error: 'Falta la propiedad difficulty' });
    if(!season) return res.status(400).json({ error: 'Falta la propiedad season' });
    if(!countries) return res.status(400).json({ error: 'La actividad debe estar relacionada al menos con un país' });

    next();
};

module.exports = {
    cleanPropsCountries,
    getCountriesApi,
    validate
};