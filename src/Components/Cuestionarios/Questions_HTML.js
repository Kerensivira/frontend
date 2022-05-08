import React, { useState } from "react";
import { arrayPreguntasHTML } from "../../Data/dataQuestions";
import {
 
    Button,
  DivBoton,
  DivHijo,
  DivRespuestas,
  QuestionTitle,
  SuperDiv,
} from "./CuestionarioStyles";

const Questions_HTML = () => {
  // encierro en constantes los hooks de estado para el funcionamiento de mi app.

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuesta, setRespuesta] = useState(0);
  const [score, setScore] = useState(0);

//configuracion para el boton

const botonRes = document.getElementById('boton')
const mostrar = document.getElementById('mostrar')

const Comprobar = () => {
const answers = DivRespuestas.querySelectorAll('respuestas');
let respuestaCorrecta = 0;


}     
   //estilos

   //siguiente pregunta


  //   function seleccionaRespuesta(Correcto, e){

  //     //determinar si el jugador ha concluido la prueba, si no es el caso, enviarlo a la siguiente.

  // if (preguntaActual === -1) {
  //   setTerminado(true)
  // }
  // else {
  //   setPreguntaActual (preguntaActual +1)
  //}

  //}

  return (
    <SuperDiv>

      <QuestionTitle className="titulo">
        <p>{arrayPreguntasHTML[preguntaActual].titulo}</p>
      </QuestionTitle>

      <DivRespuestas className="respuestas">
          <form>
            <div className="divPadre">
              <DivHijo>
                <label>{arrayPreguntasHTML[respuesta].opcion1}</label>
                <input type="radio" name="respuesta" value='answers1' />
              </DivHijo>

              <DivHijo>
                <label>{arrayPreguntasHTML[respuesta].opcion2}</label>
                <input type="radio" name="respuesta" value='answers2' />
              </DivHijo>

              <DivHijo>
                <label>{arrayPreguntasHTML[respuesta].opcion3}</label>
                <input type="radio" name="respuesta" value='answers3' />
              </DivHijo>
            </div>
           
          </form>

          <DivBoton>
        <button id="boton">
        Comprobar
        </button>

        <div id="mostrar"></div>
          </DivBoton>

      </DivRespuestas>
    </SuperDiv>
  );
};

export default Questions_HTML;
