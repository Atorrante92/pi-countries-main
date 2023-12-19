import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getCountry(id))}, []);

    const country = useSelector(state => state.country);
    //console.log(country);

    return(
        <div>
            <img src={country.flags} alt='flag'/>
            <p>ID: {country.id}</p>
            <p>Name: {country.name}</p>
            <p>Continent: {country.continents}</p>
            <p>Capital: {country.capital}</p>
            {country.subregion && <p>Subregion: {country.subregion}</p>}
            {country.area && <p>Area: {country.area}</p>}
            <p>Population: {country.population}</p>
            {country.Activities.length !== 0 && <p>Activities: {country.Activities.map(activity => {
                return  <ul>
                            <li>{activity.name}</li>
                        </ul>  
            })}</p>}
        </div>
    )
};

export default Detail;