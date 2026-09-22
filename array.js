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