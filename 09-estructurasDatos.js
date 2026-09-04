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

