
// inicio de sesión

const userF = "admin";
const passF = "1234"
const limit = 3;
let attempts = 0;
let approved = false;

while(attempts<limit && !approved){
    let userI = prompt("Ingrese el usuario:");
    let passI = prompt("ingrese la contraseña");
    attempts ++

    if(userI == userF && passI == passF){
        approved = true;
        document.write("Acceso concedido. Bienvenido!");
    } else {
        alert("Datos incorrectos. Quedan " + (limit-attempts) + " intentos.")
    };
}

if (!approved){
    document.write("Limte de intentos alcanzado. Cuenta bloqueda.");
}

