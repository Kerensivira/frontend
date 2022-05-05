                                 
                                             // PREGUNTAS HTML

export const arrayPreguntasHTML = [

    {
        titulo: '¿Qué formato tienen las páginas HTML?',
        id:1,
        opciones: [
            {respuesta: 'Son ficheros de texto. Podemos leer su contenido con cualquier procesador de texto',
            Correcto: true,
            puntaje: 10},
    
            {respuesta: 'Son ficheros binarios compilados. No se pueden leer, solo ejecutar en un navegador',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: 'Son ficheros de texto especiales. Solo pueden leerlos los navegadores, un editor de texto normal no podría abrirlo',
            Correcto: false,
            puntaje: 10},
    
            
        ]
    }
    ,
    
    {
        titulo: '¿Cuál es la versión actualmente vigente del estándar HTML?',
        id:2,
        opciones: [
            
            {respuesta: 'HTML 5',
            Correcto: true,
            puntaje: 10},
            
            {respuesta: 'HTML 4',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: 'HTML 3',
            Correcto: false,
            puntaje: 0},
    
            
        ]
    }
    
    ,
    
    {
        titulo: '¿Cuál es la estructura de una página Web? Elige de las siguientes cuál es el que muestra las secciones correctas',
        id: 3,
        opciones: [
            
            {respuesta: '<!DOCTYPE html> <head>.....</head> <body>....</body> <footer>.....</footer>',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: '<!DOCTYPE html> <html> <head>.....</head> <body>.....</body> <footer>....</footer> </html>',
            Correcto: false,
            puntaje: 0},
            
            {respuesta: '<!DOCTYPE html> <html> <head>.....</head> <body>.....</body> </html>',
            Correcto: true,
            puntaje: 10},
    
            
        ]
    }
    ,
    
    {
        titulo: '¿Cuál de estas etiquetas ayudaría a que los acentos se vieran bien en una página web?',
        id: 4,
        opciones: [
            
            {respuesta: '<language="es">',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: '<meta charset="UTF-8">',
            Correcto: true,
            puntaje: 10},
            
            {respuesta: '<meta ASCII="yes">',
            Correcto: false,
            puntaje: 0},
    
            
        ]
    }
    
    ]           
                                 
                                 
                                 
                                 //PREGUNTAS CSS

export const arrayPreguntasCss = [

{
    titulo: '¿Qué significa CSS?',
    id:1,
    opciones: [
        {respuesta: 'Cross-browser Style Sheets (Hojas de Estilo Multi-navegador)',
        Correcto: false,
        puntaje: 0},

        {respuesta: 'Cascading Style Sheets (Hojas de Estilo en Cascada)',
        Correcto: true,
        puntaje: 10},

        {respuesta: 'Coded Style Sheets (Hojas de Estilo Codificadas)',
        Correcto: false,
        puntaje: 0},

        
    ]
}
,

{
    titulo: '¿Cómo podemos añadir un comentario en una hoja de estilo CSS?',
    id:2,
    opciones: [
        
        {respuesta: 'Entre los caracteres "/*" y "*/ ". Ej: /* esto es un comentario CSS */',
        Correcto: true,
        puntaje: 10},
        
        {respuesta: 'Después de los caracteres "//". Ej: // Este es un comentario CSS',
        Correcto: false,
        puntaje: 0},

        {respuesta: 'Entre las etiquetas "<!--" y "-->". Ej: <!-- Esto es un comentario CSS -->',
        Correcto: false,
        puntaje: 0},

        
    ]
}

,

{
    titulo: '¿En qué sección de la página HTML podemos definir una hoja de estilo interna CSS?',
    id:3,
    opciones: [
        
        {respuesta: 'En al sección <body>',
        Correcto: false,
        puntaje: 0},

        {respuesta: 'En la sección <footer>',
        Correcto: false,
        puntaje: 0},
        
        {respuesta: ' En la sección <head>',
        Correcto: true,
        puntaje: 10},

        
    ]
}
,

{
    titulo: 'En HTML existe el atributo ‘class’. En relación con los estilos CSS ¿para qué crees que sirve?',
    id:4,
    opciones: [
        
        {respuesta: 'Para indicar la clase de estilo que vamos a aplicar al elemento/etiqueta HTML que lleva ese atributo: en línea, hoja interna o externa CSS',
        Correcto: false,
        puntaje: 0},

        {respuesta: 'Para aplicar unos estilos específicos (que se definen en una hoja CSS interna o externa) a los elementos que tenga la misma clase, es decir, el mismo valor en ese atributo.',
        Correcto: true,
        puntaje: 10},
        
        {respuesta: 'Es específico para indicar el color de la fuente que queremos aplicar, Por ejemplo: p class="red" presentaría las letras en rojo de ese párrafo',
        Correcto: false,
        puntaje: 0},

        
    ]
}

]

               //PREGUNTAS JAVASCRIPT

export const ArrayPreguntasJs = [

    {
        titulo: '¿En qué lugar se ejecuta generalmente el código JavaScript?',
        id:1,
        opciones: [
            {respuesta: 'Servidor',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: 'Cliente (en el propio navegador de internet)',
            Correcto: true,
            puntaje: 10},
    
            {respuesta: 'Ninguna de las anteriores',
            Correcto: false,
            puntaje: 0},
    
            
        ]
    }
    ,
    
    {
        titulo: '¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?',
        id:2,
        opciones: [
            
            {respuesta: '< script > y < /script >',
            Correcto: true,
            puntaje: 10},
            
            {respuesta: '< javascript _code > y < /javascript_code >',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: '< ?script > y < script? >',
            Correcto: false,
            puntaje: 0},
    
            
        ]
    }
    
    ,
    
    {
        titulo: 'La llamada al código Javascript debe colocarse en:',
        id:3,
        opciones: [
            
            {respuesta: 'La sección Body de la página',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: 'Antes de la etiqueta HTML',
            Correcto: false,
            puntaje: 0},
            
            {respuesta: 'Puede colocarse en la sección Head o en Body',
            Correcto: true,
            puntaje: 10},
    
            
        ]
    }
    ,
    
    {
        titulo: 'En JavaScript, para darle el nombre a una variable, objeto o función, debemos tener en cuenta que:',
        id:4,
        opciones: [
            
            {respuesta: 'No se pueden usar mayúsculas',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: 'JavaScript diferencia entre mayúsculas y minúsculas',
            Correcto: true,
            puntaje: 10},
            
            {respuesta: 'JavaScript no distingue entre mayúsculas y minúsculas',
            Correcto: false,
            puntaje: 0},
    
            
        ]
    }
    
    ]
    
                     // PREGUNTAS FIGMA

    export const ArrayPreguntasFigma = [

    {
        titulo: '¿Qué es Figma?',
        id:1,
        opciones: [
            {respuesta: 'Un programa para prototipar instalando un programa',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: 'Un programa para realizar prototipos basado en el navegador',
            Correcto: true,
            puntaje: 10},
    
            {respuesta: 'Un programa para prototipar con HTML',
            Correcto: false,
            puntaje: 0},
    
            
        ]
    }
    ,
    
    {
        titulo: '¿Cuáles es la característica principal de Figma?',
        id:2,
        opciones: [
            
            {respuesta: 'Todo se guarda en la nube',
            Correcto: true,
            puntaje: 10},
            
            {respuesta: 'Necesitas una computadora con suficiente espacio para guardar los archivos de figma',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: 'Se guarda en un archivo externo',
            Correcto: false,
            puntaje: 0},
    
            
        ]
    }
    
    ,
    
    {
        titulo: '¿Para que sirve un componente dentro de Figma?',
        id:3,
        opciones: [
            
            {respuesta: 'Para poder colocar botones',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: 'Para poder hacer link (enlaces)',
            Correcto: false,
            puntaje: 0},
            
            {respuesta: 'Cuando utilizamos un elemento de forma repetitiva',
            Correcto: true,
            puntaje: 10},
    
            
        ]
    }
    ,
    
    {
        titulo: 'En Figma solo puede realizar prototipos para:',
        id:4,
        opciones: [
            
            {respuesta: 'Sitios web en celulares y tabletas',
            Correcto: false,
            puntaje: 0},
    
            {respuesta: 'Sitios y apps en Celulares, tabletas, computadoras, relojes, impresos y redes sociales',
            Correcto: true,
            puntaje: 10},
            
            {respuesta: 'Paginas en escritorios (computadoras)',
            Correcto: false,
            puntaje: 0},
    
            
        ]
    }
    
    ]

    // Diseño UX

  export const ArrayPreguntasUX = [

{
    titulo: '¿Cuál es el objetivo principal del UX con una marca?',
    opciones: [
        {respuesta: 'Posicionamiento',
        Correcto: false},
    
        {respuesta: 'Conexión emocional con los clientes',
        Correcto: true},
    
        {respuesta: 'vínculo económico',
        Correcto: false},
    
            
     ]
}
    ,
    
    {
        titulo: '¿Que es un UX Writer?',
        opciones: [
            
            {respuesta: 'Es la disciplina encargada de dirigir la redacción de todos los textos y contenido en un producto digital',
            Correcto: true},
            
            {respuesta: 'Es la disciplina encargada de liderar todos los proyectos UX',
            Correcto: false},
    
            {respuesta: 'Es la disciplina basada en la investigación',
            Correcto: false},
    
            
        ]
    }
    
    ,
    
    {
        titulo: '¿Qué es UX Research',
        opciones: [
            
            {respuesta: 'Todos los del equipo UX que se encargan de las gráficas y del front',
            Correcto: false},
    
            {respuesta: 'Es la disciplina encargada de dirigir la redacción de todos los textos y contenido en un producto digital',
            Correcto: false},
            
            {respuesta: 'Es un campo del diseño de la experiencia de usuario que se enfoca en comprender al usuario a través de la investigación.',
            Correcto: true},
    
            
        ]
    }
    ,
    
    {
        titulo: 'Qué es un card sorting?',
        opciones: [
            
            {respuesta: 'Juego de cartas que se practica entre diseñadores UX en sus tiempos libres',
            Correcto: false},
    
            {respuesta: 'Actividad UX que consiste en observar a usuarios ordenar tarjetas organizando contenidos en diferentes categorías según lo que creen que es la mejor forma',
            Correcto: true},
            
            {respuesta: 'Ejercicio UX en que divides una hoja en 8 y haces un wireframe en cada cara',
            Correcto: false},
    
            
        ]
    }
    
    ]

  