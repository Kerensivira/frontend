import React from "react";
import { Link } from "react-router-dom";



//estilos
import {
  BotonGoogle,
  Div,
  DivLogin,
  H1,
  H6,
  IMG,
  LogoDailyBits,
  LogoInicio,
  Label,
  Input,
  BotonLogin,
  P,
  Span,
  Button,
} from "./SplashScreenStyles";



                           //Maquetacion de mi pantalla splash

const SplashScreen = () => {
  return (
    <>
      <Div className="splashScreen">
        {/* <Link to = '/Html.js'>html</Link> */}

        <LogoInicio
          src="https://res.cloudinary.com/alexa01020304/image/upload/v1648689558/logoDailyBits-PhotoRoom_cpibwj.png"
          alt="logo"
        />

        <div id="enlaces">
          {/* <Link to = '/login'>
      <Flecha
      src="https://res.cloudinary.com/alexa01020304/image/upload/v1648740154/flecha-PhotoRoom_a0x4cn.png"
      alt = 'logo'/>
      </Link>

      <Link to = '/Home'>
      ir a Home 
      </Link>*/}
        </div>
      </Div>

      <DivLogin className="maqueta_Login">
        <LogoDailyBits
          src="https://res.cloudinary.com/alexa01020304/image/upload/v1648686685/logoDailyBits_e1ol7t.png"
          alt="logo"
        />
        <H1>Iniciar sesión</H1>

        
        
        <BotonGoogle>
       <Button>
         <Span> G </Span>
         continuar con Google</Button>
      </BotonGoogle>
        

        <H6>
          _____________________________________________________
        </H6>

        <Label>Correo electrónico</Label>
        <br></br>
        <Input
          type="text"
          id="Name"
          name="Name"
          placeholder="Ingrese su correo electrónico"
          // onChange={(e) => setUserName(e.target.value)}
          // value={userName}
        />

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Ingrese su contraseña"
          // onChange={(e) => setPassword(e.target.value)}
          //value={password}
        />

        <br></br>

        <BotonLogin className="boton">iniciar Sesión</BotonLogin>

        <br></br>

        <Link to="/Registro">
          <P>¿Aún no tienes cuenta? Suscribirse</P>
        </Link>
      </DivLogin>
    </>
  );
};

export default SplashScreen;
