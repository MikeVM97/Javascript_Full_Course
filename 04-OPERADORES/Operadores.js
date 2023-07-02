// OPERADORES ARITMÉTICOS

// 1. Adición
const num1 = 10;
const num2 = 5;
console.log(num1 + num2); // Output: 15

// 2. Resta
const num3 = 50;
const num4 = 30;
console.log(num4 - num3); // Output: 20

// 3. Multiplicación
const num5 = 6;
const num6 = 11;
console.log(num5 * num6); // Output: 66

// 4. Disivión
const num7 = 10;
const num8 = 5;
console.log(num7 / num8); // Output: 2

// 5. Sobrante(módulo)
const num9 = 8;
const num10 = 3;
console.log(num9 % num10); // Output: 2







// OPERADORES DE INCREMENTO Y DECREMENTO

// 1. Incremento (++)
let num11 = 15;
num11++;
console.log(num11); // Output: 16

// 2. Decremento (--)
num11--;
num11--;
console.log(num11); // Output: 14







// OPERADORES DE ASIGNACIÓN

// 1. Adición asignación (+=)
let num12 = 100;
num12 += 50; // num12 = num12 + 50
console.log(num12); // Output: 150

// 2. Resta asignación (-=)
num12 -= 30; // num12 = num12 - 30
console.log(num12); // Output: 120

// 3. Multiplicación asignación
num12 *= 2; // num12 = num12 * 2
console.log(num12); // Output: 240

// 4. División asignación
num12 /= 8; // num12 = num12 / 8
console.log(num12); // Output: 30






// OPERADORES DE COMPARACIÓN

// 1. Igual estricto (===)
const a = 10;
const b = "10";
const c = 5;
const d = 10;

console.log(a === b); // Output: false
// Compara el valor y el tipo de dato, en este caso tienen el mismo valor, pero sus tipos son diferentes (a es tipo numer y b es tipo string), y por esta razon es false.

console.log(a == b); // Output: true
// Solo compara el valor y no el tipo de dato, en este caso tienen el mismo valor, por esta razon es true.
// Con lo cual, podemos arrastrar errores inesperados.
// Se recomienda utilizar comparación estricta.

console.log(a === c); // Output: false
console.log(a === d); // Output: true

// 2. Desigualdad estricto (!==)
console.log(a !== b); // Output: true
console.log(a !== c); // Output: true
console.log(a !== d); // Output: false

// 3. Menor que (<)
console.log(a < c); // Output: false
console.log(c < d); // Output: true

console.log(c < b); // Output: true
// c es tipo number y b es tipo string, esto puede conducir a bugs inesperados. Se recomienda Typescript

// 4. Mayor que (>)
console.log(a > c) // Output: true
console.log(c > d) // Output: false

// 5. Menor o igual a (<=)
console.log(a <= d) // Output: true
console.log(a <= c) // Output: false

// 6. Mayor o igual a (>=)
console.log(c >= d) // Output: false
console.log(d >= a) // Output: true