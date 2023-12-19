import { Landing, Home, Detail, Form } from './views';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
    const location = useLocation();                             //Este Hook me dice en qué ruta estoy parado, a travéz de su propiedad "pathname"
    return (
        <div className='App'>
            {location.pathname !== '/' && <NavBar />}           {/* Muestro la NavBar en todas las vistas, menos en Landing */}
            <Routes>
                <Route path='/' element={<Landing />} />        {/* No se usa "exact" porque estoy trabajando con la versión 6 de react-router-dom*/ }
                <Route path='/home' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/create' element={<Form />} />
            </Routes>
        </div>
    )
}

export default App
