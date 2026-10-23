const formulario = document.querySelector('#userInput');
const inputTarea = document.querySelector('input[type="text"]');
const listaContenedor = document.querySelector('#list');

formulario.addEventListener('submit', function (evento){
    evento.preventDefault();

    const textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
      alert("Ingrese una nueva tarea.");
      return;
    }
    inputTarea.value="";
});
