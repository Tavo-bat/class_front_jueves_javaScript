function saludo(nombre = "Tavo") {
  console.log(`hola ${nombre}, bienvenido`);
}
saludo();

function suma(num1, num2) {
  return num1 + num2;
}
let s = suma(4, 5);
console.log(s);

function resta(num1, num2) {
  return num1 - num2;
}
let r = resta(15, 5);
console.log(r);

function mayor(num1, num2) {
  if(num1 > num2){
    return num1
  }else
    return num2;
}
let m = mayor(5, 33);
console.log(m);

function listaYDato(lista, dat1){
    return [lista, dat1]
}
let l = listaYDato (["doberman", "ferrary", "medellin"], 5);
console.log(l);