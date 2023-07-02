// Los arrays en JavaScript son objetos que permiten almacenar múltiples valores en una sola variable.

//  Sintaxis
// Los arrays se definen con corchetes, así:
const myArray = [1, 'str', false, null, {}, []];

// Métodos más relevantes:

// 1. push(): Agrega uno o más elementos al final del array.
const fruits = ['apple', 'banana'];
fruits.push('orange');

console.log(fruits); // Output: ['apple', 'banana', 'orange']

// 2. pop(): Elimina el último elemento del array y lo devuelve.
const lastFruit = fruits.pop();

console.log(lastFruit); // Output: 'orange'
console.log(fruits); // Output: ['apple', 'banana']

// 3. concat(): Combina dos o más arrays y devuelve un nuevo array.
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = array1.concat(array2);

console.log(combinedArray); // Output: [1, 2, 3, 4]

// 4. slice(): Devuelve una porción del array como un nuevo array.
const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: ['banana', 'orange']

// 5. forEach(): Ejecuta una función en cada elemento del array.
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 6. map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array.
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8]

// 7. filter(): Crea un nuevo array con todos los elementos que cumplan con una condición especificada.
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

// 8. reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.
const sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0);

console.log(sum); // Output: 10