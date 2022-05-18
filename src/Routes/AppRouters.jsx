import React from 'react'
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Questions_CSS from '../Components/Cuestionarios/Questions_CSS';
import Questions_Figma from '../Components/Cuestionarios/Questions_Figma';
import Questions_HTML from '../Components/Cuestionarios/Questions_HTML';
import Questions_JS from '../Components/Cuestionarios/Questions_JS';
import Questions_UX from '../Components/Cuestionarios/Questions_UX';
import Home from '../Components/Home/Home';
import Perfil from '../Components/Perfil/Perfil';
import Registro from '../Components/RegisterAndLogin/Registro';
import SplashScreen from '../Components/SplashScreen/SplashScreen';
import EstadisticaUser from '../Estadistica/EstadisticaUser';

const AppRouters = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<SplashScreen/>}/>
    <Route path="/Registro" element = {<Registro/>}/>
    <Route path="/Home" element = {<Home/>}/>  
    <Route path="/Questions_HTML" element = {<Questions_HTML/>}/>
    <Route path="/Questions_CSS" element = {<Questions_CSS/>}/>
    <Route path="/Questions_JS" element = {<Questions_JS/>}/> 
    <Route path="/Questions_Figma" element = {<Questions_Figma/>}/>
    <Route path="/Questions_UX" element = {<Questions_UX/>}/> 
    <Route path='/estadistica' element = {<EstadisticaUser/>}/>
    <Route path='/perfil' element = {<Perfil/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouters