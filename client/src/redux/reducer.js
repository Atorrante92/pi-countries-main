import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRY_BY_NAME, GET_ACTIVITIES, FILTER_COUNTRIES, FILTER_ACTIVITIES, ORDER, CLEAN } from "./action-types";

const initialState = {
    countries: [],
    allCountries: [],
    countriesByName: [],
    country: {},
    activities: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state, countries: action.payload, allCountries: action.payload
            }
        case GET_COUNTRY:
            return {
                ...state, country: action.payload
            }
        case GET_COUNTRY_BY_NAME:
            return {
                ...state, countriesByName: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state, activities: action.payload
            }
        case FILTER_COUNTRIES:
            const allCountriesFiltered = state.allCountries.filter(country =>
            country.continents === action.payload);
            return {
                ...state, countries: allCountriesFiltered
            }
        case FILTER_ACTIVITIES:
            const allCountriesByActivity = state.allCountries.filter(country =>
            country.Activities.includes(action.payload));
            return {
                ...state, countries: allCountriesByActivity
            }
        case ORDER:
            const allCountriesCopy = [...state.allCountries];
            if (action.payload === 'AA' || action.payload === 'DA') {
                return {
                    ...state,
                    countries: 
                        action.payload === 'AA' ? allCountriesCopy.sort((a, b) => { 
                            if (a.name > b.name) {
                                return 1;
                            }
                            if (a.name < b.name) {
                                return -1;
                            }
                            return 0; // a must be equal to b
                        }) : allCountriesCopy.sort((a, b) => { 
                            if (a.name < b.name) {
                                return 1;
                            }
                            if (a.name > b.name) {
                                return -1;
                            }
                            return 0; // a must be equal to b
                        })
                }
            } else if(action.payload === 'AP' || action.payload === 'DP') {
                return {
                    ...state,
                    countries: 
                        action.payload === 'AP' ? allCountriesCopy.sort((a, b) => { 
                            if (+a.population < +b.population) {
                                return 1;
                            }
                            if (+a.population > +b.population) {
                                return -1;
                            }
                            return 0; // a must be equal to b
                        }) : allCountriesCopy.sort((a, b) => { 
                            if (+a.population > +b.population) {
                                return 1;
                            }
                            if (+a.population < +b.population) {
                                return -1;
                            }
                            return 0; // a must be equal to b
                        })
                }
            }
        case CLEAN:
            return {
                ...state, countriesByName: action.payload
            }
        default:
            return { ...state }
    }
};

export default reducer;