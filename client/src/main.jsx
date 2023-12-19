import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>              
        <BrowserRouter>                                             
            <App />
        </BrowserRouter>
    </Provider>,
)

//Con BrowserRouter la aplicación tiene la capacidad de definir rutas
//El Provider sirve para conectar el store con la aplicación de REACT
