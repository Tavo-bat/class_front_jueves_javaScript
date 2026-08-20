//Concatenación

let myName = "Diego";
let saludo = "Hola, " + myName + "!";
console.log(saludo);
console.log(typeof saludo);

//longitud
console.log(saludo.length);

//acceso a caracteres
console.log(saludo[0]);
console.log(saludo[11]);

// Métodos comunes

console.log(saludo.toUpperCase()) // Mayúsculas
console.log(saludo.toLowerCase()) // Minúsculas
console.log(saludo.indexOf("Hola")) // Índice
console.log(saludo.indexOf("Diego"))
console.log(saludo.indexOf("Ricardo"))
console.log(saludo.includes("Hola")) // Incluye ?
console.log(saludo.includes("Diego"))
console.log(saludo.includes("Ricardo"))
console.log(saludo.slice(0, 10)) // saca una Sección
console.log(saludo.replace("Diego", "Don Diego")) // Reemplazo