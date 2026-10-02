//Creación de elementos
const parrafoSiete = document.createElement("p");
const parrafoOcho = document.createElement("p");
const parrafoNueve = document.createElement("p");

const textoOcho = document.createTextNode("Párrafo 8");
parrafoOcho.appendChild(textoOcho);


//Utilizar selectores
const elementoPadre = document.querySelector(".padre")

//Creacion de nodos
elementoPadre.appendChild(parrafoSiete);
elementoPadre.append(parrafoOcho, parrafoNueve);

//Asignar atributos a los nodos
parrafoSiete.innerHTML=("Párrafo 7");
parrafoSiete.classList.add("parrafo");
parrafoSiete.setAttribute("id", "p7");

parrafoNueve.innerHTML=("<h2>Párrafo 9</h2>");