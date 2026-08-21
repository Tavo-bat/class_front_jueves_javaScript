/*
Desde ahora en adelante estaremos trabajando con archivos .js,
los cuales contienen código JavaScript.
Para ejecutar el código, podemos usar un navegador web o un entorno
de desarrollo como Visual Studio Code.
En este caso, usaremos el navegador web. Para ello, creamos un
archivo HTML en el índice 07 y a medida que avanzamos insertamos
el archivo de practica en scr, que enlaza con nuestro archivo JavaScript 
y lo abrimos en el navegador.
*/

/*alert("Hola, esto se está ejecutando desde el fichero 06-bucles.js");

//While

let i = 0;
while(i<=10){
document.write(i + "<br>");
i++
};*/

/*let limite = Number(prompt("Ingrese hasta4 qué número contar: "));
let i = 0;

while(i<=limite){
document.write(i + "<br>");
i++
};

document.write(typeof (limite));*/

//Bucle do...while

i=6;

do{
    document.write(`hola, ${i} <br>`);
    i++
}while(i<6);

document.writeln("Saliste del programa")