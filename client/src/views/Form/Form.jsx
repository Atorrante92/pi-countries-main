import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: '',
    });

    const changeHandler = (event) => {
        const property = event.target.name;                 //Así obtengo el nombre del (elemento input o select) que disparó el evento
        const value = event.target.value;                   //El valor que está escrito en el input(o elemento select)
        validate({ ...form, [property]: value });           //Validate debe ejecutarse al hacer cambios en el estado form, es decir en los elementos(inputs, select) del formulario. Le paso el mismo parámetro que va a tener el estado(para evitar un loop de tiempo) 
        setForm({ ...form, [property]: value });            //En esta línea se pide el cambio del estado(operación que demora un poco)
    };     
    
    const submitHandler = (event) => {
        event.preventDefault();                             //Para que al hacer click sobre el botón CREATE no se borre la info registrada en el fromulario
        axios.post('http://localhost:3001/activities', form)
        .then(res => alert(res))
        .catch(err => alert(err));
    };

    const validate = (form) => {                            //Validate recibe como parámetro el estado del Formulario

    };

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type='text' value={form.name} onChange={changeHandler} name='name' />
            </div>
            <div>
                <label>Difficulty: </label>
                <input type='number' value={form.difficulty} onChange={changeHandler} name='difficulty' />
            </div>
            <div>
                <label>Duration: </label>
                <input type='time' value={form.duration} onChange={changeHandler} name='duration' />
            </div>
            <div>
                <label>Season: </label>
                <select value={form.season} onChange={changeHandler} name='season'>
                    <option>Verano</option>
                    <option>Otoño</option>
                    <option>Invierno</option>
                    <option>Primavera</option>
                </select>
            </div>
            <div>
                <label>Countries: </label>
                <select multiple value={form.countries} onChange={changeHandler} name='countries'>
                    <option>Colombia</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                </select>
            </div>
            <div>
                <button type='submit'>CREATE</button>
            </div>
        </form>
    );
};

export default Form;