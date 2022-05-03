import React from 'react'
import { Link } from 'react-router-dom'
import { Div, Flecha, LogoInicio } from './Styles/SplashScreenStyles'

const SplashScreen = () => {
  return (
    <Div>
        SplashScreen
         <Link to = '../Components/Cuestionarios/Html.js'>html</Link>

      <LogoInicio
      src="https://res.cloudinary.com/alexa01020304/image/upload/v1648689558/logoDailyBits-PhotoRoom_cpibwj.png"
      alt = 'logo'/>

<div id='enlaces'>

      <Link to = '/login'>
      <Flecha
      src="https://res.cloudinary.com/alexa01020304/image/upload/v1648740154/flecha-PhotoRoom_a0x4cn.png"
      alt = 'logo'/>
      </Link>

      <Link to = '/Home'>
      ir a Home
      </Link>
</div>
    </Div>
  )
}

export default SplashScreen