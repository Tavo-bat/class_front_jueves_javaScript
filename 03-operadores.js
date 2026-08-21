// Operadores aritmeticos

let a = 5;
let b = 10;

console.log(a+b); //suma
console.log(a-b); //resta
console.log(a*b); //multiplicación
console.log(a/b); //división
console.log(a%b); //modulo 
console.log(a**b); //exponencial

//Particularidad

console.log("5" + 1);
console.log("5" - 1);

//Post-incrementar
console.log(a++); //muestra: 5
console.log(a); //muestra: 6

//Pre-incremento
console.log(++b); //muestra: 11

++a; //pre-incremento
console.log(a); //muestra: 7

//Post-decremento
console.log(b--); //muestra: 11
console.log(b); //muestra: 10

//Pre-decremento
console.log(--b);//muestra 9

//Operadores de asignación

let myVariable = 2;

console.log(myVariable);

myVariable += 4; //suma con asignación
console.log(myVariable);

myVariable -= 4; //resta con asignación
console.log(myVariable);

myVariable *= 4; //multiplicación con asignación
console.log(myVariable);

myVariable /= 4; //división con asignación
console.log(myVariable);

myVariable %= 4; //modulo con asignación
console.log(myVariable);

myVariable **= 4; //exponente con asignación
console.log(myVariable);

//Operadores de comparación

console.log(5 > 10); // mayor que
console.log(5 < 10); // menor que
console.log(5 >= 10); // mayor o igual que
console.log(5 <= 10); // menor o igual que

console.log("5" == 5); // igualdad (compara el valor)
console.log("5" === 5); // estrictamente igual  (compara el valor y el tipo)
console.log("5" != 5); // desigualdad (compara solo el valor)
console.log("5" !== 5); // estrictamente desigual (compara el valor y el tipo)

//Operadores lógicos

//AND (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 30 > 40);

//OR (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 > 10 || 15 > 20 || 30 > 40);

console.log(5 > 10 && 15 > 20 || 30 < 40);

// NOT (!)
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

//Operador ternario?
const isRaining = false
isRaining ? console.log("Está lloviendo") :
console.log("No esta lloviendo");

// Valores falsos (falsy)
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false