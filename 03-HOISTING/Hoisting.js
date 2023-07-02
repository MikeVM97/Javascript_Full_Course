// HOISTING

// ChatGPT:
// El hoisting en JavaScript es un comportamiento en el cual las declaraciones de variables y funciones son movidas automáticamente al principio de su ámbito actual durante la fase de compilación.

// El siguiente fragmento escrito en desarrollo
let stars = 36;

function increment(data) {
  data = data + 1;
  console.log(data);
}

increment(stars);

var abc = "ABC";

// En producción se verá compilado de la siguiente manera:

// Las variables "var" siempre son movidas al inicio del ámbito en el que fueron creadas
var abd = "ABD";

// Las funciones son también movidas al inicio del ámbito, justo después de las variables "var"
function decrement(data) {
  data = data - 1;
  console.log(data);
}

// Finalmente se ejecuta el resto de código, en el orden en el que fueron creados, llamados, etc.
let stones = 36;

increment(stones);

/* Es decir que, todas las funciones y variables(var) son movidas al principio del ámbito, funciona igual para el ámbito global y los ámbitos locales */

/* Mientras que el resto de código(variables LET, constantes CONST, llamadas a funciones, etc) se ejecutan en el orden en que fueron llamados o creados, esto es el HOISTING */




/* HOISTING EN POCAS PALABRAS: */

/* VARIABLES(var) y FUNCIONES(function) <-- Top Level */
/* RESTO DE CÓDIGO A SER EJECUTADO */