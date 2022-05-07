import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { register } from "../functions/register";
import { BotonRegistro, Div, H1, Input, LogoDailyBits, P } from "./RegisterStyles";

const Registro = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarDatos();
    console.log(userName, password);
  };

  const guardarDatos = () => {
    const user = {
      nombre: userName,
      contraseña: password,
    };
    localStorage.setItem("Usuario", JSON.stringify(user));
    //console.log(user);

    const userDos = Object.entries(user);
console.log(userDos);

if (userName === '' && password === '') {
  alert('Todos los campos son requeridos')
} else {
  alert("se ha guardado correctamente");
  window.location.href='/';
}


// if (!userDos === userName.value && password.value ) {
//    alert("se ha guardado correctamente");   
//    } else{
//       alert('Todos los campos son requeridos')
//     }

     //register()
     //Navigate('/Login')
     
  };

  const Registrarse = async () => {
    let resp = await fetch(URL);
    let data = await resp.json();

    let searchUser = data.find(user => user.usuario === userName)

    
  };

  return (
    <>
      <Div>
        <LogoDailyBits
          src="https://res.cloudinary.com/alexa01020304/image/upload/v1648686685/logoDailyBits_e1ol7t.png"
          alt="logo"
        />
        <H1>Registro</H1>


        <Form onSubmit={handleSubmit}>
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

        <BotonRegistro className="boton">Registrar</BotonRegistro>

        <br></br>
        <Link to="/">
          <P>¿Ya tienes cuenta? Iniciar Sesión</P>
        </Link>

        <br></br>
        </Form>
      </Div>
    </>
  );
};

export default Registro;
