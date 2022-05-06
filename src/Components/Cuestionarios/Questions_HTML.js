// import React from 'react'
// import { arrayPreguntasHTML } from '../../Data/dataQuestions'

// export default class Questions_HTML extends Component {
//     constructor() {
//         super()
//         this.state = {
//             id: 0,
//             question: titulo,
//             answer:{
//                 opciones:{
//                 A_respuesta: '',
//                 B_respuesta: '',
//                 C_respuesta: '',
//                 Correct: '',
//                 Puntaje: 0,
//                 } 
//             },
            
//         }

//     }

//     componentDidMount() {
//         this.getDataQuestions()
//     }

//     getDataQuestions = () => {
//         const dataQuestions = arrayPreguntasHTML[this.state.id]

//         this.setState({


//             question: {
//                 question: currentQuizData.question,
//                 a: currentQuizData.a,
//                 b: currentQuizData.b,
//                 c: currentQuizData.c,
//                 d: currentQuizData.d,
//                 correct: currentQuizData.correct,
//             }
//         })
//     }
 
 
    
    
//console.log(arrayPreguntasHTML)

// const getPregunta = (id) => {
//     return arrayPreguntasHTML.find((arrayPreguntasHTML)=>
//         arrayPreguntasHTML.id === id
//     );
// }

// console.log(getPregunta(2));

// //const pregunta3 = getPregunta(3)

// //console.log(pregunta3)

// document.querySelector("div").innerHTML = JSON.stringify(arrayPreguntasHTML)


// const Questions_HTML = () => {

  
//     return (
        
//        <>
//        </>  
         
   
//   )
// }

//export default Questions_HTML