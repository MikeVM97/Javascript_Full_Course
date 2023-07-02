// En Javascript, casi todo es un "objeto"

/* Los booleanos pueden ser objetos (si se definen con la palabra clave "new")
Los números pueden ser objetos (si se definen con la palabra clave "new")
Las cadenas pueden ser objetos (si se definen con la palabra clave "new")
Las fechas son siempre objetos (new Date).
Las matemáticas son siempre objetos.
Las expresiones regulares son siempre objetos.
Los arreglos son siempre objetos.
Las funciones son siempre objetos.
Los objetos literales son siempre objetos. */

const str = new String("Hello");
console.log(typeof str, str); // object

const num = new Number(15);
console.log(typeof num, num); // object

const isBoolean = new Boolean(false);
console.log(typeof isBoolean, isBoolean); // object

const obj = new Object();
console.log(typeof obj, obj); // object

const arr = new Array(1, '2', false, null);
console.log(typeof arr, arr); // object

const regex = new RegExp(/ab+c/, "i");
console.log(typeof regex, regex); // object

const myFunc = new Function();
console.log(typeof myFunc, myFunc); // object

const today = new Date();
console.log(typeof today, today); // object





const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(typeof person, person); // object

const numbers = [1, 2, 3, 4, 5, 5, 4, 3, 1];
console.log(typeof numbers, numbers); // object

const noRepetibles = new Set(numbers);
console.log(typeof noRepetibles, noRepetibles); // object

const fruits = new Map();
fruits.set("apples", 500);
console.log(typeof fruits, fruits); // object


/* PONDREMOS NUESTRO ENFOQUE EN LOS OBJETOS LITERALES, ARRAYS, SETS Y MAPS */