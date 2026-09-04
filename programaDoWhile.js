const prompt = require("prompt-sync")(); // Necesitas instalar prompt-sync con npm

function calculadora() {
  let opcion;
  do {
    console.log("\n--- MENÚ ---");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir");

    opcion = parseInt(prompt("Elige una opción: "));

    if (opcion >= 1 && opcion <= 4) {
      let num1 = parseFloat(prompt("Ingresa el primer número: "));
      let num2 = parseFloat(prompt("Ingresa el segundo número: "));

      switch (opcion) {
        case 1:
          console.log(`Resultado: ${num1 + num2}`);
          break;
        case 2:
          console.log(`Resultado: ${num1 - num2}`);
          break;
        case 3:
          console.log(`Resultado: ${num1 * num2}`);
          break;
        case 4:
          if (num2 !== 0) {
            console.log(`Resultado: ${num1 / num2}`);
          } else {
            console.log("Error: no se puede dividir entre cero.");
          }
          break;
      }
    } else if (opcion === 5) {
      console.log("Saliendo del programa...");
    } else {
      console.log("Opción inválida, intenta de nuevo.");
    }
  } while (opcion !== 5);
}

// Ejecutar la calculadora
calculadora();
