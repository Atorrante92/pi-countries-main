//ESTE MÓDULO SE ENCARGA DE DEFINIR LAS RUTAS DE 'countries'
const { Router } = require('express');
const { getCountriesHandler, getCountryHandler } = require('../handlers/countriesHandlers');

const countriesRouter = Router();

countriesRouter.get('/', getCountriesHandler);
countriesRouter.get('/:id', getCountryHandler);

module.exports = countriesRouter;
