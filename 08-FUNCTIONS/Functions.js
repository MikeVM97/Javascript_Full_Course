// Sintaxis

function nameOfFunction(parametros) { // En este punto se crea la función
  // código a ser ejecutado
}
// Lo que hay en los paréntesis son los parámetros, y pueden ser mas de 1, o también puede no haber ninguno

nameOfFunction(); // En este punto se llama a la función (invocación)





// 1. Declaración de funciones
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!


// 2. Expresiones de función
const multiply = function(a, b) {
  // Cuando una función no tiene nombre se denomina "función anónima"
  // Sin embargo la constante que lo contiene, si tiene un nombre
  return a * b;
};

const result = multiply(3, 4);
console.log(result); // Output: 12


// 3. Funciones de flecha (Arrow functions):
const square = (num) => {
  // Una forma alternativa de definir funciones ES6+
  return num * num;
};

console.log(square(5)); // Output: 25


// 4. Parámetros por defecto
function saludar(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

saludar(); // Output: Hello, Guest!
saludar("John"); // Output: Hello, John!


// 5. Retorno de valores
function multiplicar(a, b) {
  // La sentencia "return" hace que la ejecución se detenga, retornando lo solicitado
  return a * b;
}

const result2 = multiplicar(3, 4);
console.log(result2); // Output: 12


// 6. Ámbito de las variables
function printMessage() {
  const message = "Hello!";
  console.log(message);
}

printMessage(); // Output: Hello!
console.log(message); // Error: message is not defined


// 7. Cierres(closures)
function outerFunction() {
  const outerVariable = "I'm outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction();
inner(); // Output: I'm outside!


// 8.Recursividad
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const result3 = factorial(5);
console.log(result3); // Output: 120


// 9. Parámetro Rest (...)
// Representa los parámetros de la función dada
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77); // 8 args


// 10. El objeto Arguments
// Representa los parámetros de la función dada
function findMax() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

let y = findMax(1, 123, 500, 115, 44, 88); // 6 arguments
console.log(y);


// 11. El objeto this
// Se refiere al objeto actual en el contexto de ejecución actual

// Uso de this en un objeto
const person = {
  name: "John",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is John

// Uso de this en una función constructora:
function Car(brand, model) { // Los nombres de funciones constructoras deben comenzar con mayuscula
  this.brand = brand;
  this.model = model;
  this.getInfo = function() {
    console.log(`This car is a ${this.brand} ${this.model}`);
  };
}

const myCar = new Car("Toyota", "Camry");
myCar.getInfo(); // Output: This car is a Toyota Camry

// Uso de this en eventos
/* const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
  console.log(`Button ${this.id} was clicked`);
}); */
