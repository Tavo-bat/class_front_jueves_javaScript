// Es un array [] porque habrá varios usuarios, 
// cada usuario es un objeto de varias propiedades. Este archivo no e cambia desde el navegador en este momento
/*
console.log("1 - antes del fetch");

fetch("usuarios.json")
  .then(r => r.json())
  .then(d => console.log("3 - datos:", d))
  .catch(e => console.error("Error:", e));

console.log("2 - después del fetch");

*/

//Selectores de secciones, inputs, botones, mensajes y panel


const seccionRegistro = document.getElementById("seccion-registro");
const seccionLogin = document.getElementById("seccion-login");
const seccionPanel = document.getElementById("seccion-panel");


const inputNombre = document.getElementById("input-nombre");
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");


const inputEmailLogin = document.getElementById("input-email-login");
const inputPasswordLogin = document.getElementById("input-password-login");


const btnRegistrar = document.getElementById("btn-registrar");
const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");


const linkIrLogin = document.getElementById("link-ir-login");
const linkIrRegistro = document.getElementById("link-ir-registro");


const mensajeRegistro = document.getElementById("mensaje-registro");
const mensajeLogin = document.getElementById("mensaje-login");


const nombreActivo = document.getElementById("nombre-activo");
const listaUsuarios = document.getElementById("lista-usuarios");

// mostrar u ocultar secciones
function mostrarSeccion(seccion) {
  const todasLasSecciones = [seccionRegistro, seccionLogin, seccionPanel];
  todasLasSecciones.forEach(s => s.classList.remove("activa"));
  seccion.classList.add("activa");
}                                           

// para navegación                  
linkIrLogin.addEventListener("click", () => mostrarSeccion(seccionLogin));
linkIrRegistro.addEventListener("click", () => mostrarSeccion(seccionRegistro));

// arranque de la app                         
async function iniciarApp() {
  try {
    const response = await fetch("usuarios.json");
    console.log("Status del fetch:", response.status);

    const usuariosIniciales = await response.json();
    console.log("Usuarios cargados:", usuariosIniciales);

    if (!localStorage.getItem("usuarios")) {
      localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
    }

    mostrarSeccion(seccionRegistro);

  } catch (error) {
    console.error("Error en iniciarApp:", error);
    mostrarSeccion(seccionRegistro);
  }
}

// Llamada a la función para arrancar todo
iniciarApp();


//Botón de registro
btnRegistrar.addEventListener("click", () => {

  // capturar lo que ingresó en cada campo.
  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();
  const password = inputPassword.value.trim();

  //revisar que que no haya campos vacios
  
  if (!nombre || !email || !password) {
    mensajeRegistro.className = "mensaje-error";
    mensajeRegistro.textContent = "Todos los campos son obligatorios";
    return; 
  }

  // Leemos los usuarios que ya existen en localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Verifico que el usuario no exista ya.
  const yaExiste = usuarios.find(u => u.email === email);

  if (yaExiste) {
    mensajeRegistro.className = "mensaje-error";
    mensajeRegistro.textContent = "Ya existe una cuenta con ese email";
    return;
  }

  // Crear nuevo usuario
  const nuevoUsuario = {
    id: Date.now(),
    nombre: nombre,
    email: email,
    password: password
  };

  // agregamos al localstorage el nuevo usuario
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // para limpiar los campos del furmulario después de registrar usuario
  inputNombre.value = "";
  inputEmail.value = "";
  inputPassword.value = "";

  //poenr el mensaje que el registro fue exitoso
  mensajeRegistro.className = "mensaje-exito";
  mensajeRegistro.textContent = "¡Registro exitoso! Ahora inicia sesión";

  // timer para mostrar la seccion de login después de 1.5 segundos
  setTimeout(() => mostrarSeccion(seccionLogin), 2500);
});

// Se ejecuta cuando el usuario hace clic en entrar para el login
btnLogin.addEventListener("click", () => {

  // capturamos lo que el usuario escribió
  const email = inputEmailLogin.value.trim();
  const password = inputPasswordLogin.value.trim();

  //revisar campos vacíos
  if (!email || !password) {
    mensajeLogin.className = "mensaje-error";
    mensajeLogin.textContent = "Todos los campos son obligatorios";
    return;
  }

  //lee usuarios en localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  //revisamos si hay usuario que tenga esos datos.
  const usuarioEncontrado = usuarios.find(
    u => u.email === email && u.password === password
  );

  // si no se encuentra nada mostramos un error
  if (!usuarioEncontrado) {
    mensajeLogin.className = "mensaje-error";
    mensajeLogin.textContent = "Email o contraseña incorrectos";
    return;
  }

  //mostrar que usuario está logueado
  sessionStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));

 
  inputEmailLogin.value = "";
  inputPasswordLogin.value = "";

  // panel con nombre del usuario
  nombreActivo.textContent = usuarioEncontrado.nombre;

  // mostrar los usuarios en el panel
  mostrarUsuariosEnPanel();

  // va al panel
  mostrarSeccion(seccionPanel);
});


function mostrarUsuariosEnPanel() {

 
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Limpiamos la lista antes de llenarla y
  //  evitamos que se dupliquen si se llama más de una vez
  listaUsuarios.innerHTML = "";

  //Recorremos cada usuario y creamos un <li> por cada uno
  usuarios.forEach(u => {

    // Creamos el elemento 
    const li = document.createElement("li");

    // Le ponemos texto
    li.textContent = `${u.nombre} — ${u.email}`;

    // Lo agregamos a la lista 
    listaUsuarios.appendChild(li);
  });
}


btnLogout.addEventListener("click", () => {

  // Eliminamos al usuario activo de sessionStorage
  sessionStorage.removeItem("usuarioActivo");

  // Volvemos a la pantalla de login
  mostrarSeccion(seccionLogin);
});



