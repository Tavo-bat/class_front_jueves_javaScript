//Array, una lista ordenada de elemetos

let nombres = ["Ana", "Lina", "Maria"]
console.log(nombres);

//Acceder a los elementos

console.log("El segundo nombre es: " + nombres[1]);

for(i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}

//Agregar al final
nombres.push("María");
console.log("Se agrego al final y quedo así: " + nombres);

//Agrefar al principio
nombres.unshift("Juan");
console.log("Se agrego al principio y quedo así: " + nombres);

//Eliminar último de la lista
nombres.pop();
console.log("Despues de eliminar al último " + nombres);

//Eliminar el primero de la lista
nombres.shift();
console.log("Despues de eliminar al primero " + nombres);

//Remplazar a Lina
nombres[1] = "Pablo";
console.log(nombres);

//includes() para ver si un elemento esta en el array
console.log(nombres.includes("Ana"));
console.log(nombres.includes("Lina"));

//index() me revisa si un elemento está dentro del array y devuelve la posición
console.log(nombres.indexOf("Lina"));
console.log(nombres.indexOf("Pablo"));

// slice() - Crea un array con una parte del original
let frutas = ["Mango", "Cereza", "Uva", "Pera", "Melon"]

let subFrutas = frutas.slice(1,4);

console.log("Array original: " + frutas);

console.log("Array fragmentado: " + subFrutas);

//splice() - Agrefa o elimina en cualquier posición
console.log("Array original: " + frutas);
frutas.splice(2,0, "Fresa", "Kiwi");
console.log("Array modificado con splice: " + frutas);


// Operaciones básicas con Array

//Tamaño del array
console.log(frutas.length);

arrayVacio = [];
console.log(arrayVacio);

//Recorrer con for
for (i=0; i<frutas.length; i++){
    console.log(frutas[i])
}

//Bucle while
let j = 0
while(j < frutas.length){
    console.log(frutas[j])
    j++
}

//Recorrer con for...of

for(let variable of frutas){
    console.log(variable)
}

let myArray = [1, 2, 3, 4];
let myArray2 = new Array(3);

//Lista con espacios determinados y vacios (myArray2)
console.log(myArray);
console.log(myArray2);

//Estructuras de datos: set
/* set (conjunto) es una colección de elementos. set solo puede contener elementos únicos
Esto significa que no puede haber valores repetidos. Si intenta agregar un valor que ya existe,
JavaScript lo ignora.*/
//Carasterísticas
/*Valores únicos: Cada elemento solo puede aparecer una vez. Si intentas añadir un duplicado, se ignora.
Tipos permitidos: Puede almacenar cualquier tipo de dato: primitivos (string, number, boolean, null, undefined, NaN) y referencias a objetos.
Orden de inserción: Los elementos se recorren en el mismo orden en que fueron añadidos.
Comparación de valores: Usa el algoritmo SameValueZero, lo que significa que:
NaN se considera igual a NaN (aunque NaN !== NaN en comparación normal).
0 y -0 se consideran iguales.
Propiedad .size: Devuelve el número de elementos en el Set (similar a .length en arrays).
Iterabilidad: Se puede recorrer con for...of o con .forEach().*/

let setVacio = new Set();

let setLleno = new Set([1, 2, 3, 4, 5]);
console.log(setLleno);
console.log(typeof(setLleno));

//.add(valor)	Añade un valor único	set.add("pera")
//.has(valor)	Verifica si existe	set.has("manzana") // true
//.delete(valor)	Elimina un valor	set.delete("uva")
//.clear()	Vacía el Set	set.clear()
//.size	Cantidad de elementos	set.size

let fruit = new Set(["manzana", "pera", "uva", "manzana"]);

console.log(fruit); // Set(3) { 'manzana', 'pera', 'uva' }

console.log(fruit.has("pera")); // true

console.log(fruit.size); // 3

fruit.add("mango");
fruit.add("papaya");
fruit.add("naranja");


fruit.delete("uva");
fruit.delete("pera")

console.log(fruit.has("uva")); // false

for (let fruta of fruit) {
  console.log(fruta);
} //manzana // mango //papaya // naranja

console.log(fruit.size); // 4

fruit.clear(); // eliminar todos los elementos del set
console.log(fruit); // 0


numeros = [1, 2, 3, 2, 4, 1, 5];
console.log(numeros);
let sinRepetidos = new set(numeros);
console.log(sinRepetidos);

let arrayNumeros = Array.from(sinRepetidos);
console.log(arrayNumeros);