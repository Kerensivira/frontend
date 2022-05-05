import React from 'react'
import { arrayPreguntasHTML } from '../../Data/dataQuestions'

//console.log(arrayPreguntasHTML)

const getPregunta = (id) => {
    return arrayPreguntasHTML.find((arrayPreguntasHTML)=>
        arrayPreguntasHTML.id === id
    );
}

console.log(getPregunta(2));

//const pregunta3 = getPregunta(3)

//console.log(pregunta3)

document.querySelector("div").innerHTML = JSON.stringify(arrayPreguntasHTML)


const Questions_HTML = () => {

  
    return (
        
       <>
       </>  
         
   
  )
}

export default Questions_HTML