import React from 'react'
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from '../Components/Home';
import SplashScreen from '../Components/SplashScreen';

const AppRouters = () => {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<SplashScreen/>}/>
    <Route path="/Home" element = {<Home/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouters