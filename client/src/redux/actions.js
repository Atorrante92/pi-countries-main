import axios from 'axios';
import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRY_BY_NAME, GET_ACTIVITIES, FILTER_COUNTRIES, FILTER_ACTIVITIES, ORDER, CLEAN, /*PAGINATION*/ } from './action-types';

export const getCountries = () => {
    return async function(dispatch) {
        const countries = (await axios.get('http://localhost:3001/countries')).data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    };
};

export const getCountry = (id) => {
    return async function(dispatch) {
        const country = (await axios.get(`http://localhost:3001/countries/${id}`)).data;
        dispatch({ type: GET_COUNTRY, payload: country })
        //console.log(country);
    };
};

export const getCountryByName = (name) => {
    return async function(dispatch) {
        const countriesByName = (await axios.get(`http://localhost:3001/countries?name=${name}`)).data;
        dispatch({ type: GET_COUNTRY_BY_NAME, payload: countriesByName })
    };
};

export const getActivities = () => {
    return async function(dispatch) {
        const activities = (await axios.get('http://localhost:3001/activities')).data;
        dispatch({ type: GET_ACTIVITIES, payload: activities });
    };
};

export const filterCountries = (continent) => {
    return { type: FILTER_COUNTRIES, payload: continent }
};

export const filterActivities = (name) => {
    return { type: FILTER_ACTIVITIES, payload: name}
};

export const orderCountries = (order) => {
    return { type: ORDER, payload: order };
};

export const cleanSearchBar = () => {
    return { type: CLEAN, payload: [] };
};

// export const pagination = () => {
     
// };