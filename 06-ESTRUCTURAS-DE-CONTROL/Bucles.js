// Bucle for

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5




// Bucle while

let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
// Output: 1, 2, 3, 4, 5
console.log(count); // Output: 6




// Bucle do while

let counter = 1;
do {
  console.log(counter);
  counter++;
} while (counter <= 5);
// Output: 1, 2, 3, 4, 5
console.log(counter); // Output: 6




// Bucle for..in
// Con for..in podemos iterar sobre objetos literales
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output: name: John, age: 30, city: New York




// Bucle for..of
// Con for..of podemos iterar sobre arreglos
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
// Output: 1, 2, 3, 4, 5






/* OTROS ITERABLES */

// forEach
const paises = ["Peru", "Chile", "Bolivia", "Venezuela", "Argentina"];

paises.forEach((pais, i) => {
  console.log(i + ": " + pais);
});




// map
const numeros = [1, 2, 3, 4, 5];

const doubledNumbers = numeros.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]




// filter
const evenNumbers = numeros.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]




// reduce
const sum = numeros.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
