/* Desestructuración y propagación
La desestructuración es una forma de desempaquetar arrays y objetos 
y asignarlos a una variable distinta.*/

let myArray = [1, 2, 3, 4, 5];

let[a, b, c, d, e] = myArray;

console.log(a, b, c, d, e);

let fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
]

console.log(fullStack[0][0], fullStack[0][1], fullStack[0][2], fullStack[0][3]); //HTML CSS JS React

let [frontEnd, backEnd] = fullStack; // destructuración de arrays
console.log(frontEnd); // ["HTML", "CSS", "JS", "React"]
console.log(backEnd);

let[lenguiaje1, lenguaje2, lenguaje3, lenguaje4] = frontEnd; // desestructuración de arrays
console.log(lenguiaje1, lenguaje2, lenguaje3, lenguaje4);

let miArray2 = [6, 7, 8, 9];
let[num6, , num8, num9] = miArray2; //El espacio vacío indica que no se quiere asignar el valor de la posición 1 del array a ninguna variable

console.log(num9); //9

//sintaxis objetos

let persona = {
    nombre: "Tavo",
    edad: 28,
    ciudad: "Rionegro",
    pais: "Colombia"
};

let {nombre, edad, ciudad, pais} = persona; // desestructuración de objetos
console.log(nombre); // Tavo
console.log(edad); // 28

let {nombre: nom, edad: ed, ciudad: ciu, pais: pa, email = "tavo@example.com"} = persona; // desestructuración de objetos con alias
console.log(nom); // Tavo
console.log(ed); // 28
console.log(ciu); // Rionegro
console.log(pa); // Colombia
console.log(email); // tavo@example.com

let persona2 = {
    name: "Tavo",
    altura: 1.75,
    edad: 28,
    trabajo: {
        empresa: "CESDE",
        cargo: "Instructor"
    }
};

let {name, trabajo: {empresa, cargo}} = persona2; // desestructuración de objetos anidados
console.log(name); // Tavo
console.log(empresa); // CESDE
console.log(cargo); // Instructor
