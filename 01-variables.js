/*Una variable en JavaScript es un contenedor en memoria donde guardas un dato
(un texto, un número, un objeto, etc.) que tu programa necesita leer, operar o
modificar más adelante.*/

// VAR: Forma antigua (legacy). Alcance de función y hoisting.
// Uso: Evitar en JS moderno. Solo en código o proyectos viejos.
var nombre = "Diego";

// LET: Valor dinámico/reasignable. Alcance de bloque {}.
// Uso: Contadores, acumuladores, datos que cambian con el tiempo.
let apellido = "Giraldo";

// CONST: Valor fijo/inmutable. No permite reasignación.
// Uso: URLs, IDs, elementos del DOM, configuraciones fijas.
const segundoApellido = `Zapata`;


console.log(nombre);
console.log(apellido);
console.log(segundoApellido)

/* segundoApellido = "Lopez";
console.log(segundoApellido); esto da error, una constante no se puede sobreescribir*/