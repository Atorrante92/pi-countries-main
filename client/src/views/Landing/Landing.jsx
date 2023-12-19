import landingImage from '../../../../countries.png';
import { NavLink, Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
    return(
        <div>
            <img className={style.landingImage} src={landingImage} alt='countries of the world' />
            <button className={style.landingButton}>
                <NavLink to='/home' className={style.linkStyle}>HOME PAGE</NavLink>                   {/*La etiqueta Link me convierte el elemento button en un enlace*/}
            </button>
        </div>
    )
};

export default Landing;