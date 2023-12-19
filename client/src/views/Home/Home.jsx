import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getCountryByName, getActivities, filterCountries, filterActivities, orderCountries, cleanSearchBar, /*pagination*/ } from '../../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getCountries()), dispatch(getActivities())/*, dispatch(pagination()) */}, []);                    //La fn(1er parámetro) se ejecuta cuando el componente(Home) se monta o cuando cambia alguna de las dependencias del array de dependencias(2do parámetro). Cuando se monta Home quiero traerme(dispatch) los países al Estado Global

    //Aquí controlo el input de la SearchBar, para capturar el nombre ingresado por el usuario
    const [nameCountry, setNameCountry] = useState('');

    const changeHandlerSearchBar = (event) => {
        setNameCountry(event.target.value);                             //Esta operación de cambiar el Estado demora un poco
    };

    //Aquí traigo la propiedad "country" del Estado Global y modifico dicha propiedad con la action getCountryByName
    const countries = useSelector(state => state.countriesByName);
    //console.log(countries);

    //Aquí traigo la propiedad "activities" del Estado Global y modifico dicha propiedad con la actions getActivities
    const activities = useSelector(state => state.activities);
    console.log(activities);
    
    const clickHandler = () => {
        dispatch(getCountryByName(nameCountry));                        //Hace el dispatch de la action que modifica la propiedad "country" del Estado Global
        setNameCountry('');                                             //Aquí limpio la SearchBar y el estado local de redux
    };

    const handleFilterCountries = (event) => {
        dispatch(filterCountries(event.target.value));
    };

    const handleFilterActivities = (event) => {
        dispatch(filterActivities(event.target.value));
    };

    const handleOrder = (event) => {
        dispatch(orderCountries(event.target.value));
    };

    const onCloseHandler = () => {
        dispatch(cleanSearchBar());
    };

    //PAGINACIÓN
    //const nCountries = countries.slice(0, 10);

    return(
        <div>
            <input type='search' value={nameCountry} onChange={changeHandlerSearchBar} />
            <button onClick={onCloseHandler}>X</button>
            <button onClick={clickHandler}>SEARCH</button>

            <select onChange={handleFilterCountries}>
                <option value='Africa'>Africa</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='North America'>North America</option>
                <option value='Oceania'>Oceania</option>
                <option value='South America'>South America</option>
            </select>

            <select onChange={handleFilterActivities}>
                {activities.map(activity => {
                return <option value={`${activity.name}`}>{activity.name}</option>
                })}
            </select>

            <select onChange={handleOrder}>
                <option value='AA'>Ascendente Alfabéticamente</option>
                <option value='DA'>Descendente Alfabéticamente</option>
            </select>

            <select onChange={handleOrder}>
                <option value='AP'>Ascendente Poblacional</option>
                <option value='DP'>Descendente Poblacional</option>
            </select>

            {countries.length !== 0 ? countries.map(country => {
                return   <div>
                            <img src={country.flags} alt='flag'/>
                            <p>ID: {country.id}</p>
                            <p>Name: {country.name}</p>
                            <p>Continent: {country.continents}</p>
                            <p>Capital: {country.capital}</p>
                            <p>Subregion: {country.subregion}</p>
                            <p>Area: {country.area}</p>
                            <p>Population: {country.population}</p>
                        </div>
            }) : <CardsContainer />}
        </div>
    )
};

export default Home;

//Cuando Home se monta, se hace el dispatch de la Action Create(GET_COUNTRIES)
//La cual se encarga de llenarme de países el Estado Global
// Object.keys(countryObj).length !== 0