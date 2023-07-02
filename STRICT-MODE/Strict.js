"use strict";

// El modo estricto ('use strict') en JavaScript es una característica introducida en ECMAScript 5 que permite escribir código JavaScript de manera más segura y con reglas adicionales para evitar errores comunes y comportamientos no deseados. Al habilitar el modo estricto, el intérprete de JavaScript aplica un conjunto más estricto de reglas y muestra errores en situaciones que, de lo contrario, pasarían desapercibidas.

x = 10;
console.log(x); // ReferenceError: x is not defined
// delete x; // Error: Eliminar una variable no está permitido en modo estricto



const PI = 3.14159;
PI = 3.14; // Error: Asignación a una variable de solo lectura



function miFuncion() {
  "use strict";
  y = 20;
  console.log(y); // ReferenceError: y is not defined
  // delete miFuncion; // Error: Eliminar una función no está permitido en modo estricto
}

miFuncion();



console.log(this); // En modo estricto, `this` en el contexto global es `undefined`



function suma(a, b, a) { // Error: Nombre de parámetro duplicado
  "use strict";
  return a + b;
}

const result = suma(2, 3, 4);
console.log(result);



const obj = { a: 1, b: 2, c: 3 };

for (prop in obj) {
  console.log(prop); // Error: Variable no declarada en modo estricto
}


/* Estos ejemplos ilustran algunas situaciones donde el modo estricto ayuda a capturar errores que de otro modo podrían pasar desapercibidos. Al utilizar "use strict", se fomenta una escritura de código más segura y se evitan comportamientos inesperados. */