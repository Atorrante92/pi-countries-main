const { Activity } = require('../db');

const createActivity = async(name, difficulty, duration, season, countries) => {
    const newActivity = await Activity.create({ name, difficulty, duration, season }); //Activity.create me devuelve una promesa(como todos los métodos de los modelos), por eso se le hace "await"
    await newActivity.addCountry(countries);
    return newActivity;
};

const getAllActivities = async() => {
    const activities = await Activity.findAll();
    return activities;
};

module.exports = {
    createActivity,
    getAllActivities
}