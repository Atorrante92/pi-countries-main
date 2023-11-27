const { getCountryById, getCountryByName, getAllCountries } = require('../controllers/countriesController');

const getCountriesHandler = async(req, res) => {
    const { name } = req.query;
    try {
        const results = name ? await getCountryByName(name) : await getAllCountries();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCountryHandler = async(req, res) => {
    const { id } = req.params;
    try {
        const country = await getCountryById(id);
        res.status(200).json(country);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getCountriesHandler,
    getCountryHandler
};