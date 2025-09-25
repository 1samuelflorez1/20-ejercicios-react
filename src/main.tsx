import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Ejerciciofacil2 from './Exercises/Ejerciciofacil2'
// import Saludo from './Exercises/Ejerciciofacil1'
// import InputEscribir from './Exercises/Ejerciciofacil3'
// import RenderizarApi from './Exercises/Ejerciciofacil4'
// import BtnMostrar from './Exercises/Ejerciciofacil5'
// import EstadoConectado from './Exercises/Ejerciciofacil6'
import FirstForm from './Exercises/Ejerciciofacil7'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Saludo name="Samuel" career="Interactive Media Design" age="19"/> */}
    {/* <Ejerciciofacil2 /> */}
    {/* <InputEscribir/> */}
    {/* <RenderizarApi/> */}
    {/* <BtnMostrar/> */}
    {/* <EstadoConectado/> */}
    <FirstForm/>
  </StrictMode>,
)
