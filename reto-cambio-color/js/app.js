// ============================================
// RETO 1: SELECCIÓN DEL DOM
// ============================================
// Guarda en variables los elementos del HTML que vas a usar.
// Pistas:
//  - querySelector('#id') recibe un selector CSS (con el #).
//  - getElementById('id') recibe solo el id (sin el #).

const botonColor = null;   // TODO 1: selecciona el botón con id "boton-color".
const botonFiesta = null;  // TODO 2: selecciona el botón con id "boton-fiesta".
const textoColor = null;   // TODO 3: selecciona el párrafo con id "color".


// ============================================
// FUNCIÓN: GENERAR COLOR HEXADECIMAL ALEATORIO
// ============================================
// Un color hexadecimal tiene la forma #RRGGBB: 6 dígitos, cada uno de 0 a F.
// La lista de dígitos ya está escrita. Completa el bucle.

function generarColorHexAleatorio() {
  const digitos = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    // TODO 4: escoge un índice aleatorio entre 0 y 15.
    //   Pista: Math.floor(Math.random() * 16) da un entero entre 0 y 15.
    // const indice = ...;

    // TODO 5: agrega a 'color' el carácter que está en la posición 'indice' de 'digitos'.
    //   Pista: digitos[indice] devuelve un carácter. Se suma con +=.
  }

  return color;
}


// ============================================
// RETO 2: ESCUCHADOR DEL BOTÓN "CAMBIAR COLOR"
// ============================================
// Al hacer click en botonColor, el fondo de la página y el texto deben cambiar
// al mismo color aleatorio.
// Pasos:
//  1. Escucha el evento 'click' en botonColor con addEventListener.
//  2. Dentro de la función, genera un color con generarColorHexAleatorio().
//  3. Cambia el fondo: document.body.style.backgroundColor
//  4. Cambia el texto: textoColor.textContent

// TODO 6: escribe aquí tu addEventListener.


// ============================================
// RETO 3: MODO FIESTA CON INTERVALOS
// ============================================
// Al presionar "Modo fiesta", el color cambia cada 500 ms y el botón dice "Parar fiesta".
// Al presionar de nuevo, la fiesta se detiene y el botón vuelve a decir "Modo fiesta".
// Pistas:
//  - setInterval(función, 500) ejecuta la función cada 500 ms y devuelve un id.
//  - clearInterval(id) detiene ese intervalo.
//  - La variable fiestaActiva (true o false) indica si la fiesta está encendida.
//  - Para que el intervalo cambie el color, puedes usar una función que haga el cambio.
//
// Pregunta para pensar: ¿qué pasa si presionas "Modo fiesta" varias veces seguidas
// sin detener el intervalo anterior?

let fiestaActiva = false;  // ¿la fiesta está encendida?
let idIntervalo = null;    // aquí guardas el id que devuelve setInterval

// TODO 7: escribe el addEventListener de botonFiesta.
//   Si la fiesta NO está activa: activa la variable, cambia el texto del botón,
//   y guarda en idIntervalo el resultado de setInterval.
//   Si la fiesta SÍ está activa: detén el intervalo, desactiva la variable
//   y vuelve a cambiar el texto del botón.
