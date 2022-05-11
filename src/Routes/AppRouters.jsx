import React from 'react'
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Questions_CSS from '../Components/Cuestionarios/Questions_CSS';
import Questions_HTML from '../Components/Cuestionarios/Questions_HTML';
import Home from '../Components/Home/Home';
import Registro from '../Components/RegisterAndLogin/Registro';
import SplashScreen from '../Components/SplashScreen/SplashScreen';

const AppRouters = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<SplashScreen/>}/>
    <Route path="/Registro" element = {<Registro/>}/>
    <Route path="/Home" element = {<Home/>}/>  
    <Route path="/Questions_HTML" element = {<Questions_HTML/>}/>
    <Route path="/Questions_CSS" element = {<Questions_CSS/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouters