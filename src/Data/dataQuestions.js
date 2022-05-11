// PREGUNTAS HTML

export const arrayPreguntasHTML = [
  {
    titulo: "¿Qué formato tienen las páginas HTML?",

    opciones: [
      {
        opcion1:
          "Son ficheros de texto. Podemos leer su contenido con cualquier procesador de texto",
      },

      {
        opcion2:
          "Son ficheros binarios compilados. No se pueden leer, solo ejecutar en un navegador",
      },

      {
        opcion3:
          "Son ficheros de texto especiales. Solo pueden leerlos los navegadores, un editor de texto normal no podría abrirlo",
      },
    ],
  },
  {
    titulo: "¿Cuál es la versión actualmente vigente del estándar HTML?",
    opciones: [
      { opcion1: "HTML 5" },

      { opcion2: "HTML 4" },

      { opcion3: "HTML 3" },
    ],
  },

  {
    titulo:
      "¿Cuál es la estructura de una página Web? Elige de las siguientes cuál es el que muestra las secciones correctas",
    opciones: [
      { opcion1: "<!DOCTYPE html> <head>.....</head> <body>....</body> <footer>.....</footer>" },

      { opcion2: "<!DOCTYPE html> <html> <head>.....</head> <body>.....</body> <footer>....</footer> </html>" },

      { opcion3: "<!DOCTYPE html> <html> <head>.....</head> <body>.....</body> </html>" },
    ],
  },

  {
    titulo:
      "¿Cuál de estas etiquetas ayudaría a que los acentos se vieran bien en una página web?",
    opciones: [
      { opcion1: '<language="es">' },

      { opcion2: '<meta charset="UTF-8">'},

      { opcion3: '<meta ASCII="yes">' },
    ],
  },
];

//PREGUNTAS CSS

export const arrayPreguntasCss = [
  {
    titulo: "¿Qué significa CSS?",
    opciones: [
      {opcion1: "Cross-browser Style Sheets (Hojas de Estilo Multi-navegador)"},

      {
        opcion2: "Cascading Style Sheets (Hojas de Estilo en Cascada)"
      },

      {
        opcion3: "Coded Style Sheets (Hojas de Estilo Codificadas)"
      },
    ],
  },
  {
    titulo: "¿Cómo podemos añadir un comentario en una hoja de estilo CSS?",
    opciones: [
      {
        opcion1:'Entre los caracteres "/*" y "*/ ". Ej: /* esto es un comentario CSS */'
      },

      {
        opcion2:'Después de los caracteres "//". Ej: // Este es un comentario CSS'
      },

      {
        opcion3:'Entre las etiquetas "<!--" y "-->". Ej: <!-- Esto es un comentario CSS -->'
      },
    ],
  },

  {
    titulo:
      "¿En qué sección de la página HTML podemos definir una hoja de estilo interna CSS?",
    opciones: [ 
        
    { opcion1: "En al sección <body>" },

      { opcion2: "En la sección <footer>"},

      { opcion3: " En la sección <head>"},
    ],
  },
  {
    titulo:
      "En HTML existe el atributo ‘class’. En relación con los estilos CSS ¿para qué crees que sirve?",
    opciones: [
      {opcion1: "Para indicar la clase de estilo que vamos a aplicar al elemento/etiqueta HTML que lleva ese atributo: en línea, hoja interna o externa CSS"},

      {
        opcion2:
          "Para aplicar unos estilos específicos (que se definen en una hoja CSS interna o externa) a los elementos que tenga la misma clase, es decir, el mismo valor en ese atributo."
      },

      {
        opcion3:
          'Es específico para indicar el color de la fuente que queremos aplicar, Por ejemplo: p class="red" presentaría las letras en rojo de ese párrafo'
      },
    ],
  },
];

//PREGUNTAS JAVASCRIPT

export const ArrayPreguntasJs = [
  {
    titulo: "¿En qué lugar se ejecuta generalmente el código JavaScript?",
    id: 1,
    opciones: [
      { opcion1: "Servidor", },

      {
        opcion2: "Cliente (en el propio navegador de internet)"
      },

      { opcion3: "Ninguna de las anteriores"},
    ],
  },
  {
    titulo:
      "¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?",

    opciones: [
      { opcion1: "< script > y < /script >" },

      {
        opcion2: "< javascript _code > y < /javascript_code >"
      },

      { opcion3: "< ?script > y < script? >"},
    ],
  },

  {
    titulo: "La llamada al código Javascript debe colocarse en:",
    id: 3,
    opciones: [
      {
        opcion1: "La sección Body de la página"
      },

      { opcion2: "Antes de la etiqueta HTML"},

      {
        opcion3: "Puede colocarse en la sección Head o en Body"
      },
    ],
  },
  {
    titulo:
      "En JavaScript, para darle el nombre a una variable, objeto o función, debemos tener en cuenta que:",
    id: 4,
    opciones: [
      {
        opcion1: "No se pueden usar mayúsculas"
      },

      {
        opcion2: "JavaScript diferencia entre mayúsculas y minúsculas"
      },

      {
        opcion3: "JavaScript no distingue entre mayúsculas y minúsculas"
      },
    ],
  },
];

// PREGUNTAS FIGMA

export const ArrayPreguntasFigma = [
  {
    titulo: "¿Qué es Figma?",
    id: 1,
    opciones: [
      {
        opcion1: "Un programa para prototipar instalando un programa"
      },

      {
        opcion2:
          "Un programa para realizar prototipos basado en el navegador"
      },

      {
        opcion3: "Un programa para prototipar con HTML"
      },
    ],
  },
  {
    titulo: "¿Cuáles es la característica principal de Figma?",
    id: 2,
    opciones: [
      { opcion1: "Todo se guarda en la nube" },

      {
        opcion2:
          "Necesitas una computadora con suficiente espacio para guardar los archivos de figma"
      },

      {
        opcion3: "Se guarda en un archivo externo"
      },
    ],
  },

  {
    titulo: "¿Para que sirve un componente dentro de Figma?",
    id: 3,
    opciones: [
      { opcion1: "Para poder colocar botones"},

      {
        opcion2: "Para poder hacer link (enlaces)"
      },

      {
        opcion3: "Cuando utilizamos un elemento de forma repetitiva"
      },
    ],
  },
  {
    titulo: "En Figma solo puede realizar prototipos para:",
    id: 4,
    opciones: [
      {
        opcion1: "Sitios web en celulares y tabletas"
      },

      {
        opcion2:
          "Sitios y apps en Celulares, tabletas, computadoras, relojes, impresos y redes sociales"
      },

      {
        opcion: "Paginas en escritorios (computadoras)"
      },
    ],
  },
];

// Diseño UX

export const ArrayPreguntasUX = [
  {
    titulo: "¿Cuál es el objetivo principal del UX con una marca?",
    opciones: [
      { opcion1: "Posicionamiento" },

      { opcion2: "Conexión emocional con los clientes" },

      { opcion3: "vínculo económico" },
    ],
  },
  {
    titulo: "¿Que es un UX Writer?",
    opciones: [
      {
        opcion1:
          "Es la disciplina encargada de dirigir la redacción de todos los textos y contenido en un producto digital",
      },

      {
        opcion2:
          "Es la disciplina encargada de liderar todos los proyectos UX",
       
      },

      {
        opcion3: "Es la disciplina basada en la investigación",
       
      },
    ],
  },

  {
    titulo: "¿Qué es UX Research",
    opciones: [
      {
        opcion1:
          "Todos los del equipo UX que se encargan de las gráficas y del front",
       
      },

      {
        opcion2:
          "Es la disciplina encargada de dirigir la redacción de todos los textos y contenido en un producto digital",
       
      },

      {
        opcion3:
          "Es un campo del diseño de la experiencia de usuario que se enfoca en comprender al usuario a través de la investigación.",
       
      },
    ],
  },
  {
    titulo: "Qué es un card sorting?",
    opciones: [
      {
        opcion1:
          "Juego de cartas que se practica entre diseñadores UX en sus tiempos libres",
       
      },

      {
        opcion2:
          "Actividad UX que consiste en observar a usuarios ordenar tarjetas organizando contenidos en diferentes categorías según lo que creen que es la mejor forma",
       
      },

      {
        opcion3:
          "Ejercicio UX en que divides una hoja en 8 y haces un wireframe en cada cara",
      },
    ],
  },
];
