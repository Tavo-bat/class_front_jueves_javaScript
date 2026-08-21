// if, else if, else

//if

let edad = 38;

if (edad == 37) {
    console.log("La edad es 37 años")
}
//else (si no)
else{
    console.log("La edad no es 37 años")
};

//else if (si no, si)

let edadPension = 20;

/*if (edadPension >= 65){
    console.log('Tienes edad para pensionarte')
}
else if (edadPension >= 60){
    console.log('Puedes pensionarte si tienes 30 años de cotización')
} else{
    console.log("No puedes pensionarte")
}

console.log("No es un numero");*/

if (edadPension >= 65){
    console.log('Tienes edad para pensionarte')
}
else if (edadPension >= 60){
    console.log('Puedes pensionarte si tienes 30 años de cotización')
} 
else if(edadPension < 60){
    console.log('Le falta calle')
}
else{
    console.log("No puedes pensionarte")
}

//Usuario logueado

nombreUser = "";

if (nombreUser) {
    console.log("Bienvenido, " + nombreUser)
} else {
    console.log("Bienvenido, invitado")
}

//Otro ejemplo if else if else

tengoHambre = true;
tengoComida = false;
tengoPlata = false;

if (tengoHambre && tengoComida) {
    console.log("Tengo hambre, tengo comida, voy a comer")
}
else if (tengoHambre && tengoPlata) {
    console.log(`Tengo hambre, no tengo comida, pero si tengo plata,
        voy a comer algo fuera`)
}
else {
    console.log("No puedo comer")
}

// Ejemplo

const horaDeLlegada = 8;

if (horaDeLlegada <= 7) {
    console.log("Llegué temprano; hasta la alarma se sorprendió")
}
else if (horaDeLlegada <= 8) {
    console.log("Llegué tarde, pero con una excusa premium")
}
else {
    console.log("Llegué tan tarde que ya me estaban despidiendo")
}

//Switch

let dia = 5;
let nombreDia;

switch (dia){
    case 0:
        nombreDia = "Lunes"
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miércoles"
        break
    case 3:
        nombreDia = "Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    case 5:
        nombreDia = "Sábado"
        break
    case 6:
        nombreDia = "Domingo"
        break
    default:
        nombreDia = "No es un día válido"
}

console.log(nombreDia)

let mes = "Abril";
let estacion;

switch (mes){
    case "Enero":
        estacion = "Verano"
        break
    case "Febrero":
        estacion = "Verano"
        break
    case "Marzo":
        estacion = "Otoño"
        break
    case "Abril":
        estacion = "Otoño"
        break
    case "Mayo":
        estacion = "Otoño"
        break
    case "Junio":
        estacion = "Invierno"
        break
    case "Julio":
        estacion = "Invierno"
        break
    case "Agosto":
        estacion = "Invierno"
        break
    case "Septiembre":
        estacion = "Primavera"
        break
    case "Octubre":
        estacion = "Primavera"
        break
    case "Noviembre":
        estacion = "Primavera"
        break
    case "Diciembre":
        estacion = "Verano"
        break
    default:
        estacion = "No es un mes válido"
}

console.log(estacion)
