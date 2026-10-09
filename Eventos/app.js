/* Hay tres maneras de hacer un evento en JavaScript, 
la primera es con el atributo onclick en el HTML (inline), 
la segunda es con la propiedad onclick en JavaScript y 
la tercera es con el método addEventListener en JavaScript 
(Es la forma mas moderna y recomendada, además de ser más flexible y mantenible).*/

const boton=document.getElementById("btn");

// Agregar un evento onclick al botón

/*boton.onclick= function() {
    alert("Evento desde app.js");
}*/

/*boton.addEventListener('click', function() {
    alert("Evento desde app.js");
});*/

//boton.addEventListener('click',saludar); Evento que funciona con un click
//boton.addEventListener('contextmenu',saludar); Evento que funciona con click derecho
//boton.addEventListener('mouseover',saludar); Evento que funciona cuando el mouse pasa por encima del botón

boton.addEventListener('dblclick',saludar); // evento que funciona con doble click

function saludar() {
    console.log("Hola, desde función saludar")
};

const inputText=document.querySelector("#inputText");

const form=document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault() // Evita que se recargue la página al enviar el formulario
    console.log('event desde el formulario')
});

boton.removeEventListener('mouseover', function() {
    boton.style.backgroundColor="red";
});