// Métodos basicos de manipulación del DOM

//Recuerde: selecciono, guardo en una variable y luego manipulo.

//Obtener elemento por ID

let elementoPorId = document.getElementById("p1");

//console.log(elementoPorId);

elementoPorId.innerHTML = "Párrafo modificado usando getElementById";

//Modificar estilos

elementoPorId.style.background="blue";
elementoPorId.style.color="white";
elementoPorId.style.fontSize="30px";
elementoPorId.style.fontWeight="bold";
elementoPorId.style.textAlign="center";
elementoPorId.style.borderRadius="20px";
elementoPorId.style.padding="10px";
elementoPorId.style.margin="10px";
elementoPorId.style.border="2px solid black";
elementoPorId.style.width="50%";
elementoPorId.style.boxShadow="5px 5px 5px black";

//Obtener elementos por su etiqueta

let elementoPorTag = document.getElementsByTagName("p");

//console.log(elementoPorTag);

elementoPorTag[1].innerHTML = "Párrafo modificado usando getElementByIdTagName";

//Obtener elemento por clase

let elementoPorClase = document.getElementsByClassName("parrafo");

//console.log(elementoPorClase)

elementoPorClase[2].innerHTML = "Párrafo modificado con getElementsByClassName";

//Query Selector

//Elemento por ID

let elementoPorIdQuerySelector = document.querySelector("#p4");

//console.log(elementoPorIdQuerySelector);

elementoPorIdQuerySelector.innerHTML = "Párrafo modificado con querySelector por ID"

//Elemento por Clase

//let elementoPorClaseQuerySelector = document.querySelector(".parrafo");

//console.log(elementoPorClaseQuerySelector);

//elementoPorClaseQuerySelector.innerHTML = "Párrafo modificado con querySelector por Clase"

let elementoPorClaseQuerySelector = document.querySelectorAll(".parrafo");
//console.log(elementoPorClaseQuerySelector);
//console.log(elementoPorClaseQuerySelector.length);
let mi_array = [...elementoPorClaseQuerySelector];

elementoPorClaseQuerySelector[4].innerHTML = "Párrafo modificado con querySelectorAll por Clase";

//Elemento por Etiqueta

elementoPorTagQuerySelector = document.querySelectorAll("p");

elementoPorTagQuerySelector[5].innerHTML = "Párrafo modificado con querySelectorAll por Tag";

//Adicionar un nuevo parrafo

const elementoPadre = document.querySelector(".padre");

const parrafoSiete = document.createElement("p");

parrafoSiete.innerHTML = "Párrafo 7"
parrafoSiete.classList.add("parrafo");
parrafoSiete.setAttribute("id","p7")

elementoPadre.appendChild(parrafoSiete);