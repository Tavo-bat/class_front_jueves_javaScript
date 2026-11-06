const formulario = document.querySelector('#userInput');
const inputTarea = document.querySelector('input[type="text"]');
const listaContenedor = document.querySelector("#lista-tareas");
const contadorPendientes = document.querySelector("#contador-pendientes");
const contadorCompletadas = document.querySelector("#contador-completadas");

formulario.addEventListener('submit', function (evento){
    evento.preventDefault();

    const textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
      alert("Ingrese una nueva tarea.");
      return;
    }

    agregarTareaAlDOM(textoTarea);
    actualizarEstadisticas();

    inputTarea.value="";
});

function agregarTareaAlDOM(textoDeTarea){
  const tareaLi = document.createElement('li')
  tareaLi.innerHTML = `
<label>
  <input type="checkbox">
  ${textoDeTarea}
</label>
<span class="closeBtn"><img src="./img/delete.png" alt="Eliminar" class="icono-basura"></span>
`;
tareaLi.classList.add("lista-tarea");

listaContenedor.appendChild(tareaLi)
};

listaContenedor.addEventListener(`click`, function (event){

  if (event.target.type === `checkbox`) {
    actualizarEstadisticas();
  }else if(event.target.closest(`.icono-basura`)){
    const tarjetaTarea = event.target.closest(`.lista-tarea`);
    tarjetaTarea.remove()
    actualizarEstadisticas();
  }
});

function actualizarEstadisticas() {
  const totalTareas = document.querySelectorAll('#lista-tareas li').length;
  const completadas = document.querySelectorAll('#lista-tareas input[type="checkbox"]:checked').length;
  const pendientes = totalTareas - completadas;

  contadorPendientes.textContent = pendientes;
  contadorCompletadas.textContent = completadas;
};