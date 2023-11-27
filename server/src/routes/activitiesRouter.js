//ESTE MÓDULO SE ENCARGA DE DEFINIR LAS RUTAS DE 'activities'
const { Router } = require('express');
const { getActivitiesHandler, createActivityHandler } = require('../handlers/activitiesHandlers');
const { validate } = require('../utils');

const activitiesRouter = Router();

activitiesRouter.get('/', getActivitiesHandler);
activitiesRouter.post('/', validate, createActivityHandler); //Si se hace una solicitud POST, antes de entrar al Handler que crea una Activity se realiza una validación
                                                             //De esta forma si hay algún error en los datos ingresados, el flujo se corta antes de llegar a editarse la DB
module.exports = activitiesRouter;