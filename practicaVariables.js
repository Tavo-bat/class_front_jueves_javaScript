//Ejercicios operadores

let suma = (5+5);
let resta = (5-5);
let mult = (5*5);
let div = (5/5);
let mod = (5%5);
let exp = (5**5);

//Operaciones artiméticas
console.log(suma);
console.log(resta);
console.log(mult);
console.log(div);
console.log(mod);
console.log(exp);

//operación de asignación

let num1 = 15;

num1 += suma;
console.log(num1);

num1 -= suma;
console.log(num1);

num1 *= suma;
console.log(num1);

num1 /= suma;
console.log(num1);

num1 %= suma;
console.log(num1);

num1 **= suma;
console.log(num1);

//Comparación

console.log(10>5);
console.log(5==5);
console.log(10<50);
console.log(150>=10);
console.log(35<=50);

console.log(10<5);
console.log(5!=5);
console.log(10>50);
console.log(150<=10);
console.log(35>=50);

console.log(10>5 && 5==5);

console.log(10<5 || 5==5);

console.log(10>5 && 5==5 || 10<suma);

console.log((5+5)>(3+2) && (exp>5));

//Ejercicios String

let ciudad = "Paris";
let calificativo = "BELLA";

console.log(ciudad + " es " + calificativo);

console.log(ciudad.length);

console.log(calificativo[0]);
console.log(calificativo[4]);

console.log(ciudad.toUpperCase());
console.log(calificativo.toLocaleLowerCase());

let multiline = `Esta es una cadena                                                                                                                                                                 
que tiene varias
líneas de texto`;
console.log(multiline);

let nombre = "Tavo";
let saludo = `Hola, mi nombre es ${nombre}`;
console.log(saludo);

let comercio = `La deuda de ${nombre} con la DIAN es grande`;
console.log(comercio);

console.log(saludo.indexOf("Hola"));

console.log(saludo.replaceAll(" ", "-"));

console.log(saludo.includes("Hola"));

let string1 = "camisa";
let string2 = "pantalon";

console.log(string1 == string2);

console.log(string1.length == string2.length);