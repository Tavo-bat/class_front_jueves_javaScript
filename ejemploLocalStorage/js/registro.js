// Capturar el formulario de registro por su ID
const formularioRegistro = document.querySelector('#formRegistro');
// Capturar las cajas de texto donde el usuario escribe sus datos
const inputNombre = document.querySelector('#nombre');
const inputCorreo = document.querySelector('#correo');
const inputPassword = document.querySelector('#password');
const mensajeEstado = document.querySelector('#mensajeEstado');


formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = inputNombre.value.trim();
    const correo = inputCorreo.value.trim();
    const password = inputPassword.value.trim();
    if (nombre === '' || correo === '' || password === '') {
        alert('Por favor completa todos los campos');
        return;
    }
    // 1. Mostrar estado de carga inmediato en la pantalla
    mensajeEstado.textContent = 'Conectando con el servidor...';
    // 2. Temporizador asíncrono para simular latencia de red (2.5 segundos)
    setTimeout(() => {
        const nuevoUsuario = { nombre, correo, password };
        localStorage.setItem('usuarioRegistrado', JSON.stringify(nuevoUsuario));
        // 3. Actualizar el mensaje tras completarse el guardado
        mensajeEstado.textContent = '¡Registro Exitoso! Redirigiendo...';
    }, 2500);
});

