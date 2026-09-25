/* Desestructuración y propagación
La desestructuración es una forma de desempaquetar arrays y objetos 
y asignarlos a una variable distinta.*/

let myArray = [1, 2, 3, 4, 5];

let[a, b, c, d, e] = myArray;

console.log(a, b, c, d, e); // 1 2 3 4 5

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

const paises = [
    ["Colombia", "Bogotá"],
    ["Perú", "Lima"],
    ["Argentina", "Buenos Aires"]
];

for (let [pais, capital] of paises){
    console.log(`La capital de ${pais} es ${capital}`);
} // desestructuración de arrays en un bucle for...of


function saludar({nombre, edad}) { // desestructuración de objetos en parámetros de función
    console.log(`Hola, soy ${nombre} y tengo ${edad} años`);
}

saludar({
    nombre: "Tavo",
    edad: 28
})

// Propagación-spreading (...)

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, ...resto] = arrayNumeros; // propagación de arrays
console.log(num1); // 1
console.log(num2); // 2
console.log(resto); // [3, 4, 5, 6, 7, 8, 9, 10]

let numerosArray = [11, 12, 13, 14, 15];

let numeros = [...arrayNumeros, ...numerosArray]; // propagación de arrays
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let arrayNumerosSup = [9, 10,...numerosArray, 16, 17, 18, 19, 20]; // propagación de arrays
console.log(arrayNumerosSup); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


let perfil = {
    nombre: "Tavo",
    edad: 30,
    alias: "TavoCa"
}

let perfilMas = {...perfil, email: "tavo@example.com"}
console.log(perfilMas);

let suma = (...numeros)=>{
    let resultado = 0;
    for (let numero of numeros){
        resultado+=numero
    } return resultado
}

total = suma(5, 6, 10);

console.log(total);