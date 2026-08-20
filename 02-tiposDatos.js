/* TIPOS DE DATOS PRIMITIVOS
(Valores simples que se guardan directamente en la variable)*/

//Cadenas de texto (String)
//Representa secuencias de caracteres entre comillas simples, dobles o invertidas.
let myName = "Diego";
let alias = "Don Diego";
let email = `minino@cesde.net`;

//number (numeros)
//A diferencia de otros lenguajes, JS no diferencia entre int o float; todos los números son de punto flotante de 64 bits.
let edad = 43;
let estatura = 1.7;

//boolean (bolleanos) true / false
//Funciona como un interruptor de dos posiciones en memoria (1 bit conceptual)
let hambre = true;
let pereza = false;

// BIGINT (Entero grande)
// Números enteros extremadamente grandes (terminan en 'n').
let numeroGrande = BigInt(9007199254740991)
let idGigante = 9007199254740991n;
console.log(numeroGrande);
console.log(idGigante);

// NULL (Nulo): Ausencia intencional de valor. Representa "vacío" adrede.
// Uso: Limpiar una variable o indicar que un dato aún no existe deliberadamente.
let sinValor = null;
let usuarioSeleccionado = null;
let inicio = null;

// UNDEFINED (No definido)
// Variable declarada pero sin un valor asignado aún.
let undefinedVariable
let respuesta;
let animal;
let direccion;

// SYMBOL (Símbolo)
// Identificador único e inmutable.
let claveUnica = Symbol("id");

console.log(undefinedVariable);
console.log(typeof myName);
console.log(typeof alias);
console.log(typeof email);
console.log(typeof edad);
console.log(typeof estatura);
console.log(typeof hambre);
console.log(typeof pereza);
console.log(typeof numeroGrande);
console.log(typeof sinValor);
console.log(typeof inicio);
console.log(typeof animal);


/* TIPOS DE DATOS COMPUESTOS / DE REFERENCIA
(Colecciones de datos o estructuras complejas)*/

// OBJECT (Objeto): Colección de pares clave-valor (propiedades y métodos).
// Uso: Modelar entidades con múltiples atributos (un perfil, un producto, una config).
let usuario = {
  nombre: "Diego",
  edad: 28,
  ciudad: "Rionegro"
};

// ARRAY (Arreglo / Lista): Lista ordenada de elementos indexados secuencialmente.
// Uso: Agrupar colecciones de datos del mismo tipo o respuestas de APIs.
let lenguajes = ["JavaScript", "Python", "SQL"];

// FUNCTION (Función): Bloque de código ejecutable y reutilizable.
// Uso: Encapsular lógica, calcular resultados o responder a eventos del usuario.
let saludar = function() {
  return "¡Hola a todos!";
};