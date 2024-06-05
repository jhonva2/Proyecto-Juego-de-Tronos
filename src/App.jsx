import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header/Header'
import HomePages from './Pages/HomePage/HomePages'
import PersonajesPages from './Pages/PersonajesPages/PersonajesPages'
import CronologiasPage from './Pages/CronologiasPage/CronologiasPage'
import CasasPage from './Pages/CasasPages/CasasPage'
import HeaderContainer from './Componentes/HeaderContainer/HeaderContainer'
import PersonajesDetail from './Pages/PersonajesDetail/PersonajesDetail'
import CasasDetail from './Pages/CasasDetail/CasasDetail'


function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      
      <BrowserRouter>
         <HeaderContainer/>
        <Routes>

          <Route path="/" element={< HomePages />} />
          <Route path="/personajes" element={<PersonajesPages />} />
          <Route path="/personajes/:id" element={<PersonajesDetail/>}/>
          <Route path="/casas" element={<CasasPage />} />
          <Route path="/casas/:id" element={<CasasDetail/>} />
          <Route path="/cronologia" element={<CronologiasPage />} />              
         
        </Routes>
        <Header/>
      
      </BrowserRouter>
    </>
  )
}

export default App
