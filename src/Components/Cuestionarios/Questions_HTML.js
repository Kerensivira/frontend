import React, { useState } from "react";
import { arrayPreguntasHTML } from "../../Data/dataQuestions";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./CuestionarioIndex.css";
import {
  Activation,
  ActivationFalse,
  ContentOptions,
  Continue,
  ContinueFalse,
  DivHijo,
  Html,
  HtmlHome,
  Invisible,
  Label,
  Num,
  Ok,
  Options,
  PaddingHtml,
  Pantalla,
  Position0,
  Position1,
  Position2,
  Progress,
  TextImg,
  Title,
  Veri,
} from "./CuestionarioStyles";

const Questions_HTML = () => {

  const optionA = () => {
    const A = document.querySelector(".A");
    const B = document.querySelector(".B");
    const C = document.querySelector(".C");

    // RESPUESTA CORRECTA, ACTIVA ESTILOS CORRECTOS
    A.classList.add("correct");

    // DESACTIVA LAS DEMÁS OPCIONES
    B.classList.add("disabled");
    C.classList.add("disabled");

    // VERIFICACIÓN
    const verification = document.querySelector(".verification");
    verification.classList.add("veri");

    console.log(A.classList.value);
  };

  const optionB = () => {
    const A = document.querySelector(".A");
    const B = document.querySelector(".B");
    const C = document.querySelector(".C");

    // RESPUESTA CORRECTA, ACTIVA ESTILOS CORRECTOS
    B.classList.add("correct");

    // DESACTIVA LAS DEMAS OPCIONES
    A.classList.add("disabled");
    C.classList.add("disabled");

    // VERIFICATION
    const verification = document.querySelector(".verification");
    verification.classList.add("veri");

    console.log(B.classList.value);
  };

  const optionC = () => {
    const A = document.querySelector(".A");
    const B = document.querySelector(".B");
    const C = document.querySelector(".C");

    // RESPUESTA CORRECTA, ACTIVA ESTILOS CORRECTOS
    C.classList.add("correct");

    // DESACTIVA LAS DEMAS OPCIONES
    A.classList.add("disabled");
    B.classList.add("disabled");

    // VERIFICATION
    const verification = document.querySelector(".verification");
    verification.classList.add("veri");

    console.log(C.classList.value);
  };

  // FUNCION PARA VERIFICAR LA RESPUESTA
  function verification() {
        

    const A = document.querySelector(".A");
    const B = document.querySelector(".B");
    const C = document.querySelector(".C");

    if (A.classList.value === "sc-fEOsli dJTKer A correct") {
      alertaCorrect();
    } else if (B.classList.value === "sc-fEOsli dJTKer B correct") {
      disminuir();
      alertaIncorrecta();

      const Borde = document.querySelector(".Borde");
      Borde.classList.add("IncorrectBorde");
      B.classList.add("Incorrect");
    } else if (C.classList.value === "sc-fEOsli dJTKer C correct") {
      disminuir();
      alertaIncorrecta();
    } else {
      return;
    }
  }

  // function continues (){
  //   console.log('Continue')
  // }

  // FUNCION DE PROGRESO

  // FUNCION PARA ACTIVAR ALERTA CORRECTA

  function alertaCorrect() {
    const color = document.querySelectorAll('.color');
    barra++;
    if(barra > color.length){
      barra = color.length;
  }
  
    update()

    const alertCorrect = document.querySelector(".alertCorrect");
    alertCorrect.classList.add("active");
    
  }
  

  function alertaIncorrecta() {
    const alertIncorrect = document.querySelector(".alertIncorrect");
    alertIncorrect.classList.add("active");
  }

  // CONTADOR

  const [vidas, setVidas] = useState (5); 
  //se inicializa una variable en 0
  function disminuir() {
    // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
  
    document.getElementById("num").value = setVidas( vidas - 1) //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //document.getElementById("num").innerHTML = num;
  }

  //Funcion para cambiar la pregunta.

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuesta, setRespuesta] = useState(0);

  let barra = 1;

    function update() {
        const color = document.querySelectorAll('.color');
        color.forEach((color, idx) => {
            if(idx < barra){
                color.classList.add("active");
            }else {
                color.classList.remove("active");
            }
        });
    }

function comprobar (){
  
    alertaCorrect()
}

  function handleNextQuestionSubmit() {

    //Llamar "Desactivar opciones"
    desactivarOpciones();
   
   //Cambiar informacion.
     setRespuesta (respuesta + 1)
     setPreguntaActual (preguntaActual + 1)

     //remover los botones de alerta.
     const alertCorrect = document.querySelector(".alertCorrect");
     alertCorrect.classList.remove("active");

     const alertIncorrect = document.querySelector(".alertIncorrect");
    alertIncorrect.classList.remove("active");

    //Barra de Score.
    
  }

  function desactivarOpciones (){
    const A = document.querySelector(".A");
    const B = document.querySelector(".B");
    const C = document.querySelector(".C");

    A.classList.remove("disabled");
    B.classList.remove("disabled");
    C.classList.remove("disabled");
  }

  return (
    <>
      <Invisible>
        <Pantalla></Pantalla>
      </Invisible>

      <HtmlHome>
        <PaddingHtml>
          <Html>
            <Position0>
              <Link to="/home" className="x">
                <FontAwesomeIcon icon={faXmark} />
              </Link>
            </Position0>

            <Position1>
              <Progress>
                <div className='color'></div>
              </Progress> 
            </Position1>

            <Position2>
              <FontAwesomeIcon icon={faHeart} />
              <Num id="num">5</Num>
            </Position2>
          </Html>

          <TextImg>
            <div className="img">
              <img
                src="https://res.cloudinary.com/dovavvnjx/image/upload/v1651901396/telefono-movil_qiqpcf.png"
                alt="Img"
              ></img>
            </div>
            <Title className="text_html" id="textOne">
              {arrayPreguntasHTML[preguntaActual].titulo}
            </Title>
          </TextImg>

          <ContentOptions>
            <Options>
              
              {/* OPCION A */}
              <DivHijo onClick={optionA} className="A">
                {arrayPreguntasHTML[respuesta].opciones.map((respuesta) => (
                  <label htmlFor="radio0"> {respuesta.opcion1} </label>
                ))}

                <input
                  type="radio"
                  name="respuesta"
                  id="radio0"
                  value="answers1"
                />
                <label htmlFor="radio0"></label>
              </DivHijo>

              {/* OPCION B */}

              <DivHijo onClick={optionB} className="B">
                {arrayPreguntasHTML[respuesta].opciones.map((respuesta) => (
                  <Label htmlFor="radio1">{respuesta.opcion2}</Label>
                ))}
                <input
                  type="radio"
                  name="respuesta"
                  id="radio1"
                  value="answers2"
                />
                <Label
                  className="Borde"
                  htmlFor="radio1"
                ></Label>
              </DivHijo>

              {/* OPCION C */}

              <DivHijo onClick={optionC} className="C">
                {arrayPreguntasHTML[respuesta].opciones.map((respuesta) => (
                  <label htmlFor="radio2">
                    {respuesta.opcion3}
                  </label>
                ))}

                <input
                  type="radio"
                  name="respuesta"
                  id="radio2"
                  value="answers3"
                />
                <label htmlFor="radio2"></label>
              </DivHijo>
            </Options>
          </ContentOptions>

          <Veri onClick={verification} className="verification">
            COMPROBAR
          </Veri>
        </PaddingHtml>

        <Activation className="alertCorrect">
          <Ok>¡Buen Trabajo!</Ok>
          <Continue onClick={handleNextQuestionSubmit} className="continue">
            CONTINUAR
          </Continue>
        </Activation>

        <ActivationFalse className="alertIncorrect">
          <Ok>¡Sigue Intentando!</Ok>
          <ContinueFalse onClick={handleNextQuestionSubmit} className="continueIncorrect">
            CONTINUAR
            </ContinueFalse>
        </ActivationFalse>
      </HtmlHome>
    </>
  );
};

export default Questions_HTML;
