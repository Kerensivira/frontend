import React from "react";
import { Link } from "react-router-dom";
import { BotonRegistro, Div, H1, Input, LogoDailyBits, P } from "./RegisterStyles";

const Registro = () => {
  return (
    <>
      <Div>
        <LogoDailyBits
          src="https://res.cloudinary.com/alexa01020304/image/upload/v1648686685/logoDailyBits_e1ol7t.png"
          alt="logo"
        />
        <H1>Registro</H1>

        <br></br>
        <Input
          type="text"
          id="Name"
          name="Name"
          placeholder="Ingrese su correo electrónico"
          //   onChange={(e) => setUserName(e.target.value)}
          //   value={userName}
        />

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Ingrese su contraseña"
          //onChange={(e) => setPassword(e.target.value)}
          //   value={password}
        />

        <br></br>

        <BotonRegistro className="boton">Registrar</BotonRegistro>

        <br></br>
        <Link to="/">
          <P>¿Ya tienes cuenta? Iniciar Sesión</P>
        </Link>

        <br></br>
      </Div>
    </>
  );
};

export default Registro;
