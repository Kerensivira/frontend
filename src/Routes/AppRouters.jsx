import React from 'react'
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Questions_HTML from '../Components/Cuestionarios/Questions_HTML';
import Home from '../Components/Home';
import SplashScreen from '../Components/SplashScreen/SplashScreen';

const AppRouters = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<SplashScreen/>}/>
    <Route path="/Home" element = {<Home/>}/>  
    <Route path="/Questions_HTML" element = {<Questions_HTML/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouters