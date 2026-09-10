// 1. Crea un array con 5 ciudades
let ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza"];

// 2. Muestra todas con for
console.log("Lista de ciudades:");
for (let i = 0; i < ciudades.length; i++) {
    console.log(ciudades[i]);
}

// 3. Agrega una ciudad nueva
ciudades.push("Bilbao");
console.log("Tras agregar Bilbao:", ciudades);

// 4. Elimina la primera
ciudades.shift();
console.log("Tras eliminar la primera:", ciudades);

// 5. Cambia la tercera
// Recordando que los índices empiezan en 0, la tercera es el índice 2
ciudades[2] = "Málaga";
console.log("Tras cambiar la tercera por Málaga:", ciudades);

// 6. Pide nombres hasta escribir "fin" (do...while) y
// 7. Guarda los nombres en un array
let nombres = [];
let nombre;

do {
    nombre = prompt("Introduce un nombre (o escribe 'fin' para terminar):");
    if (nombre !== "fin" && nombre !== null) {
        nombres.push(nombre);
    }
} while (nombre !== "fin" && nombre !== null);

// 8. Muestra cuántos nombres hay
console.log("Cantidad de nombres introducidos:", nombres.length);
console.log("Nombres:", nombres);

// 9. Busca un nombre con prompt. Di si existe o no.
let busqueda = prompt("Introduce un nombre para buscar en la lista:");
if (nombres.includes(busqueda)) {
    console.log("El nombre '" + busqueda + "' existe en la lista.");
    alert("El nombre '" + busqueda + "' existe en la lista.");
} else {
    console.log("El nombre '" + busqueda + "' NO existe en la lista.");
    alert("El nombre '" + busqueda + "' NO existe en la lista.");
}
