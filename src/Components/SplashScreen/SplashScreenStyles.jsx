import styled from "styled-components";

// Estilos generales

export const Div = styled.div`
  background-color: #6b47dc;
  width: 350px;
  height: 94vh;
  display: none;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;
  border-radius: 20px;
`;

//Configuracion de imagen
export const LogoInicio = styled.img`
  width: 200px;
  height: 200px;
`;

//Flecha que desaparecerá si logro hacer la cosa bien, sino, que siga la fiesta.

// export const Flecha = styled.img`

//    width: 10%;
//    position: relative;
//    left: 85%;
//    margin-top: 16%;

//`

                        //Maquetacion de mi Login.

export const DivLogin = styled.div`
  background-color: black;
  border: solid 2px #fff;
  border-radius: 20px;
  width: 350px;
  height: 94vh;
`;

export const LogoDailyBits = styled.img`
  width: 20%;
  margin-top: 5%;
  margin-left: 40%;
  margin-right: 38%;
  border-radius: 20%;
  position: relative;
  right: 2%;
`;

export const H1 = styled.h1`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  left: 22%;
  margin-top: 2%;
  margin-bottom: 4%;
`;

//Boton de Google
export const BotonGoogle = styled.div`
position: relative;
left: 10%;
width: 30%; 
height: 20px;
width: 100%;
`;

export const Button = styled.button`
    background-color: #dc4747;
    color: #fff;
    width: 80%;
    height: 180%;
    border: none;
    border-radius: 6px;
    font-size: 15px;
`

export const Span = styled.span`
    font-family: 'Poppins', sans-serif;
    margin-right: 2%;
`;


export const H6 = styled.h6`
  color: #ffffff;
  position: relative;
  left: 10%;
  opacity: 50%;
`;

export const Label = styled.label`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  left: 15%;
`;

export const Input = styled.input`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 2%;
  width: 75%;
  height: 30px;
  position: relative;
  left: 2%;
  border: none;
  border-radius: 5px;
  left: 13%;
`;

export const BotonLogin = styled.button`
  background-color: #2fd22f;
  border: solid;
  border-color: #2fd22f;
  border: none;
  border-radius: 5px;
  color: white;
  position: relative;
  width: 30%;
  height: 10%;
  left: 34%;
  margin-top: 5%;
  transition: ease-in-out 0.3s;

  :hover {
    background-color: #4517b9;
    border-color: #090952;
    height: 11%;
    width: 31%;
  }
`;

export const P = styled.div`
  color: #27b627;
  text-decoration: none;
  position: relative;
  left: 18%;
  margin-top: 3%;
  transition-duration: 0.3s;

  :hover {
    color: blueviolet;
  }
`;
