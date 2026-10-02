//Creación de elementos
const parrafoSiete = document.createElement("p");
const parrafoOcho = document.createElement("p");
const parrafoNueve = document.createElement("p");
const parrafoCero = document.createElement("p");
const parrafoExtra = document.createElement("p");

const textoOcho = document.createTextNode("Párrafo 8");
parrafoOcho.appendChild(textoOcho);


//Utilizar selectores
const elementoPadre = document.querySelector(".padre")
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");


//Creacion de nodos
elementoPadre.appendChild(parrafoSiete);
elementoPadre.append(parrafoOcho, parrafoNueve);

elementoPadre.insertBefore(parrafoCero, p1);

p2.insertAdjacentElement("beforeend", parrafoExtra);

//1. beforebegin: inserta el elemento antes del elemento padre
//2. afterbegin: inserta el elemento al inicio del elemento padre
//3. beforeend: inserta el elemento al final del elemento padre
//4. afterend: inserta el elemento después del elemento padre


//Asignar atributos a los nodos
parrafoSiete.innerHTML=("Párrafo 7");
parrafoSiete.classList.add("parrafo");
parrafoSiete.setAttribute("id", "p7");

parrafoNueve.innerHTML=("<h2>Párrafo 9</h2>");
parrafoNueve.classList.add("parrafo");

parrafoCero.innerHTML=("Parrafo 0");

parrafoExtra.innerHTML=("<h2>Párrafo Extra</h2>");
parrafoExtra.classList.add("parrafo");
parrafoExtra.setAttribute("id", "pExtra");

parrafoExtra.style.color = "Blue";