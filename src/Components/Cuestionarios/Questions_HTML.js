import React, { useState } from "react";
import { arrayPreguntasHTML } from "../../Data/dataQuestions";
import './CuestionarioIndex.css'
import {
 
    Button,
  DivHijo,
  DivRespuestas,
  InputRadio,
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


    const optionA = () => {
        const a = document.querySelector('.a');

        const b = document.querySelector('.b').disabled = true;
        const c = document.querySelector('.c').disabled = true;

        const optionB = document.querySelector('.optionB');
        const optionC = document.querySelector('.optionC')

        a.classList.add('active', true);
        optionB.classList.add('disabled');
        optionC.classList.add('disabled');
    }

    const optionB = () => {
        const b = document.querySelector('.b');

        const a = document.querySelector('.a').disabled = true;
        const c = document.querySelector('.c').disabled = true;

        const optionA = document.querySelector('.optionA');
        const optionC = document.querySelector('.optionC')

        b.classList.add('active', true);
        optionA.classList.add('disabled');
        optionC.classList.add('disabled');
    }

    const optionC = () => {
        const c = document.querySelector('.b');

        const a = document.querySelector('.a').disabled = true;
        const b = document.querySelector('.b').disabled = true;

        const optionA = document.querySelector('.optionA');
        const optionB = document.querySelector('.optionB')

        c.classList.add('active', true);
        optionA.classList.add('disabled');
        optionB.classList.add('disabled');
    }

  const next = () => {
    const a = document.querySelector('.a');
    
    if (a.classList.value === 'a active true') {
        console.log(true)
    } else {
        console.log(false)
    }
  }

  return (
    <SuperDiv>

      <QuestionTitle className="titulo">
        <p>{arrayPreguntasHTML[preguntaActual].titulo}</p>
      </QuestionTitle>

      <DivRespuestas className="respuestas">
          <form>
            <div className="divPadre">
              <DivHijo className="optionA">
                <label>{arrayPreguntasHTML[respuesta].opcion1}</label>

                <input type="radio" name="respuesta" className="a" id="radio0" value='answers1' onClick={optionA}/>
						<label for="radio0"></label>
              </DivHijo>

              <DivHijo className="optionB">
                <label>{arrayPreguntasHTML[respuesta].opcion2}</label>

                <input type="radio" name="respuesta" className="b" id="radio1" value='answers2' onClick={optionB}/>
						<label for="radio1"></label>
              </DivHijo>

              <DivHijo className="optionC">
                <label>{arrayPreguntasHTML[respuesta].opcion3}</label>

                <input type="radio" name="respuesta" className="c" id="radio2" value='answers3' onClick={optionC}/>
						<label for="radio2"></label>
              </DivHijo>
            </div>
           
          </form>

        
        <Button onClick={next} id="boton">
        Comprobar
        </Button>
        

        <div id="mostrar"></div>
      </DivRespuestas>
    </SuperDiv>
  );
};

export default Questions_HTML;
