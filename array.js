let ciudades = ["Medellin", "Bogota", "Cali", "Pereira", "Neiva"];

console.log(ciudades.length);

for(let ciudad of ciudades){
    console.log(ciudad);
}

ciudades.push("Guarne");

for(let i=0;i<ciudades.length;i++){
    console.log(ciudades[i])
};

console.log(ciudades.length);

ciudades.shift();

console.log(ciudades.length);

console.log(ciudades.includes("Medellin"));

ciudades[2] = "Rionegro";

console.log(ciudades);

/*
let nombres = [];
let nombre;

do{
    nombre = prompt("Ingresa un nombre, o fin para terminar: ");
    if(nombre !== "fin" && nombre !== null){
        nombres.push(nombre);
    }
}while(nombre !== "fin" && nombre !== null);

console.log("Los nombres guardados fueron: " + nombres.length);
console.log("nombres: " + nombres);

let findName = prompt("Ingresa el nombre que deseas buscar");

if (nombres.includes(findName)){
    alert(findName + ", Encontrado");
    document.write(findName + ", si existe en la lista")
} else{
    alert(findName + ", no existe");
}

document.write("<br>Los nombres guardados fueron: " + nombres.length);
document.write("<br>nombres: " + nombres);
*/

let estudiantes = new Set();

estudiantes.add("Pedro");
estudiantes.add("Juan");
estudiantes.add("Maria");

console.log(estudiantes.size);
console.log(estudiantes);

console.log(estudiantes.has("Maria"));
console.log(estudiantes.has("Luis"));

let numeros = [5, 5, 6, 7, 7, 8, 9];

let sinRepetidos = new Set(numeros);

console.log(sinRepetidos);

let paises = new Set ()

paises.add("Colombia");
paises.add("Korea");
paises.add("Peru");
paises.add("Chile");

for (let pais of paises){
    console.log(pais)
};

let meses = new Map();

meses.set(1, "Enero");
meses.set(2, "Febrero");
meses.set(3, "Marzo");
meses.set(5, "Mayo");

console.log(meses.has(5));
console.log(meses.get(5));

let verano = ["Junio", "Julio", "Agosto"];

meses.set(6, verano);

console.log(meses.get(6));

console.log(meses);

let codigos = [123, 321, 123, 456, 654, 456, 789, 987, 798];

let codUni = new Set(codigos);

let codMap = new Map ([[1, codUni]]);

console.log(codigos);
console.log(codUni);
console.log(codMap.get(1))

let paisCapital = new Map([["Colombia", "Bogota"], ["Perú", "Lima"], ["Chile", "Santiago"]]);

console.log(paisCapital.get("Colombia"));

let inventario = new Map();

inventario.set("Teclado", 10);
inventario.set("Mouse", 20);
inventario.set("Monitor", 5);

for (let producto of inventario){
    console.log(producto)
};

let estuMap = new Map([["Juan", 15], ["Luis", 16], ["Carlos", 15]]);

if (estuMap.has("Maria")){
    console.log(estuMap.get("Maria"))
} else{
    estuMap.set("Maria", 14)
    console.log(estuMap.get("Maria"))
};
