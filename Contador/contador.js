let cuenta = 0;

function aumentar() {
    cuenta++;
    document.getElementById("numero").innerHTML = cuenta;
    cambiarColor();
}

function disminuir(){
    cuenta --;
    document.getElementById("numero").innerHTML = cuenta;
    cambiarColor();
}

function resetear(){
    cuenta = 0;
    document.getElementById("numero").innerHTML = cuenta;
    cambiarColor();
}


//funciona cambiar color

function cambiarColor() {
const numeroColor = document.getElementById("numero");

    if (cuenta >= 10) {
        numeroColor.style.color = "green";
    } else {
        numeroColor.style.color = "black";
    }
}