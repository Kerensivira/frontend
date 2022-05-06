import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './ScreenIndex.css';

//estilos
import {
  BotonGoogle,
  DivLogin,
  H1,
  H6,
  LogoDailyBits,
  Label,
  Input,
  BotonLogin,
  P,
  Span,
  Button,
} from "./SplashScreenStyles";



                           //Maquetacion de mi pantalla splash

const SplashScreen = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
   // console.log(userName, password);
  };

  const URL = "https://dailybits2022.herokuapp.com/usuario/";
  const iniciarSesion = async () => {
    let resp = await fetch(URL);
    let data = await resp.json();

    let searchUser = data.find(user => user.usuario === userName)

    if (searchUser.usuario === userName && searchUser.password === password ) {
       navigate('/Home')
    } else{
      alert('usuario o contrasena incorrecta.')
    }
  };

  return (
    <>
      <div className='container'>
          <div className='splash1'></div>
        <div className='splash'>
          <img src='https://res.cloudinary.com/dovavvnjx/image/upload/q_100/v1651860403/Dise%C3%B1o_sin_t%C3%ADtulo_6_xbraun.png' alt='Logo'/>
        </div>
      </div>


{/* Maquetacion Login */}

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
          onChange={(e) => setUserName(e.target.value)}
           value={userName}
        />

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Ingrese su contraseña"
           onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <br></br>

        <BotonLogin className="boton">Iniciar Sesión</BotonLogin>

        <br></br>

        <Link to="/Registro">
          <P>¿Aún no tienes cuenta? Suscribirse</P>
        </Link>
      </DivLogin>
    </>
  );
};

export default SplashScreen;
