//Este componente debe tomar un array de países y por cada país renderizar un componente Card (SMART)
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';

const CardsContainer = () => {
	const countries = useSelector(state => state.countries);   //Quiero que el array de países venga del Estado Global
    
    return(
        <div className={style.container}>
            {countries.map((country) => {
                return <Card 								   //Cuando renderizo el componente Card le paso props (estas vienen de afuera)
                id={country.id}
                flags={country.flags}
                name={country.name}
                continents={country.continents}
                />
            })}
        </div>
    )
};

export default CardsContainer;