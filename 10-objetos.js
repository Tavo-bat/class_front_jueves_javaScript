
let persona = {
    nombre: "Camilo",
    apellido: "Ramirez",
    edad: 40,
    ciudad: "Medellin"
};

console.log(persona.nombre); //notación punto
console.log(persona["ciudad"]); //notación corchetes


//Modificacion de las propiedades de un objeto
persona.edad = 41;
persona.ciudad = "Bogota";
console.log(persona.ciudad);

//Agregar nuevas propiedades a un objeto
persona.profesion = "albañil";
console.log(persona);

//Eliminar propiedades de un objeto
delete persona.apellido;
console.log(persona.apellido); //undefined

//Verificar si una propiedad existe en un objeto
console.log("ciudad" in persona); //true
console.log("apellido" in persona); //false

for (let propiedad in persona){
    console.log(propiedad + ": " + persona[propiedad]);
}

let persona2 = {
    nombre: "Camilo",
    apellido: "Gomez",
    edad: 30,
    ciudad: "Cali"
};

console.log(persona);
console.log(persona2);

//Comparar objetos
console.log(persona === persona2); //false, compara la referencia de memoria, no el contenido de los objetos

console.log(persona.nombre === persona2.nombre); //true, compara el valor de la propiedad nombre

//comparar objetos con JSON.stringify
console.log(JSON.stringify(persona) === JSON.stringify(persona2)); //false, compara el contenido de los objetos

console.log(JSON.stringify(persona) === JSON.stringify(persona)); //true, compara el contenido de los objetos

//obtener las claves de un objeto
console.log(Object.keys(persona)); //["nombre", "edad", "ciudad", "profesion"]

//obtener los valores de un objeto
console.log(Object.values(persona)); //["Camilo", 41, "Bogota", "albañil"]

//obtener las entradas de un objeto
console.log(Object.entries(persona)); //[["nombre", "Camilo"], ["edad", 41], ["ciudad", "Bogota"], ["profesion", "albañil"]]

//clonar un objeto
let personaClonada = Object.assign({}, persona);
console.log(personaClonada);

/*Metodos de un objeto
un método es una función que pertenece a un objeto. Los métodos se definen 
como propiedades de un objeto, y se pueden invocar utilizando la notación de punto o corchetes.*/

let persona3 = {
    nombre: "Ana",
    edad: 25,
    caminar: function(){
        console.log("Hola, soy " + this.nombre + " y estoy caminando");
    },
    trabajo: {
        empresa: "Google",
        puesto: "Desarrollador",
    }
};

persona3.caminar(); //Hola, soy Ana y estoy caminando

console.log(persona3.trabajo);
console.log(persona3.trabajo.empresa); //Google