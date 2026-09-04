//Función tradional (Declaración)

function funcionTradicional() {
    console.log("hola, que hace?")
};

funcionTradicional();

for (let i=0; i<5; i++){
    funcionTradicional()
};

//Función por expresión

let funcionExpresion = function(){
    console.log("chaolin");
};

funcionTradicional();
funcionExpresion();

//Funciones con parametros

function funcionParametros(name = "name", apellido = "lastName"){ //argumentos
    console.log(`Hola ${name}, ${apellido}`)
}

funcionParametros();

funcionParametros("Gustavo", "Cadena"); //parametros

function suma (a=0, b=0){
    console.log(a + b);
};

suma(5, 10);
suma(20, 10);
suma(30, 10);
suma(5);
suma();

//Función anónima

const funcionAnonima = function (name){
    console.log(`¡Hola!, ${name}!`);
};
funcionAnonima("Tavo");

//Funciones flecha (array function)

const funcionFlecha1 = () =>{
    console.log(`Hola`);
};

const funcionFlecha2 =(nombre) => console.log(`Hola ${nombre}`);

funcionFlecha1("");
funcionFlecha2("");

//Con y sin retorno

function cuadrado(num){
    console.log(`El cuadrado de ${num} es ${num * nuem}`);
};

cuadrado(4);

let resultado = cuadrado(4);
    console.log(resultado);

    // con return

    function cuadrado(num){
        return num * num;
    }
    let r = cuadrado(4);

    console.log(r);