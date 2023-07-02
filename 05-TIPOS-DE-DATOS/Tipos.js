// En Javascript, existen varios tipos de datos que se utilizan para representar diferentes tipos de valores.
// Y podemos determinar el tipo de dato de una variable o constante, utilizando el operador typeof.

// 1. Number(Número)
const age = 26;
console.log(typeof age); // Output: number

// 2. String(Cadena de texto)
const firstName = "John";
const message = "Welcome to the Black Parade";
const myAge = `My age is: ${age} years old`;
console.log(typeof firstName); // Output: string

// 3. Boolean(Valor booleano)
const isBroken = true;
const isSubscribed = false;
console.log(typeof isBroken); // Output: boolean

// 4.Object(Objeto)
const person = { name: "John", age: 30, city: "New York" };
const car = { brand: "Toyota", model: "Camry", year: 2021 };
console.log(typeof person); // Output: object
console.log(Array.isArray(person)); // Output: false

// 5. Array(Arreglo)
const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // Output: object
console.log(Array.isArray(numbers)); // Output: true

// 6. Function(Función)
const x = function () {
  console.log('Hello');
}
console.log(typeof x); // Output: function

const myFunction = () => {
  console.log('Morning!');
}
console.log(typeof myFunction); // Output: function

// 7. Null
const abc = null;
console.log(typeof abc); // Output: object

// 8. Undefined
let value;
const obj = {};
const saludo = obj.saludo;
console.log(typeof value); // Output: undefined
console.log(typeof obj); // Output: object
console.log(typeof saludo); // Output: undefined

// 9. Symbol
const key = Symbol("uniqueKey");
console.log(typeof key); // Output: symbol

// 10. BigInt
const bigNumber = BigInt(9007199254740991);
console.log(typeof bigNumber); // Output: "bigint"

const anotherBigNumber = 123456789n;
console.log(typeof anotherBigNumber); // Output: "bigint"









/* CONCLUSIONES */

/* DATOS PRIMITIVOS DE JAVASCRIPT */
/* Un valor primitivo es un valor que no tiene propiedades ni métodos.
Un tipo de dato primitivo son datos que tienen un valor primitivo.
JavaScript define 7 tipos de tipos de datos primitivos: */
/* number, string, boolean, null, undefined, symbol, bigint */

/* OTROS TIPOS DE DATOS DERIVADOS: object, function */

/* POR OTRA PARTE */
/* Cualquier variable o constante puede contener como valor a uno de estos tipos de dato primitivo */
/* El tipo de dato más común que contienen las variables o constantes es el tipo 'object' */
/* A su vez, este tipo de dato puede ser una de las siguiente estructura de datos: 
un Objeto, un Array, un Map, un Set, null, etc */
/* Aunque null no es una estructura de dato, si es un objeto de Javascript, typeof null = object */


/* EXISTEN 6 ESTRUCTURAS DE DATOS EN JAVASCRIPT: */
/* Array, Object, Map, Set, Queue, Stack */