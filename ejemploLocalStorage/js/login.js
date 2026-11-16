if (correo === usuarioValido.correo && password === usuarioValido.password) {
alert(`¡Bienvenido de nuevo, ${usuarioValido.nombre}!`);

// window.location.href = 'index.html';
} else {
alert('Correo electrónico o contraseña incorrectos.');
}
