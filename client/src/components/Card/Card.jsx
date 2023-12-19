//Este componente (DUMB) debe mostrar la info de cada país mapeado y además dar un link para ir al detalle del país en cuestión
import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return(
        <div className={style.card}>
            <img src={props.flags} alt='flag'/> 
            <Link to={`/detail/${props.id}`}><p>Name: {props.name}</p></Link>
            <p>Continent: {props.continents}</p>
            {/* <p>Capital: {props.capital}</p>
            <p>Subregion: {props.subregion}</p>
            <p>Area: {props.area}</p>
            <p>Population: {props.population}</p> */}
        </div>
    )
};

export default Card;