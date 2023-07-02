// En JavaScript, tanto null como undefined representan valores especiales que indican la ausencia de un valor o la falta de asignación. Sin embargo, hay una diferencia sutil entre ellos.


console.log(typeof null); // Output: object
console.log(typeof undefined); // Output: undefined

let x;
console.log(x); // Output: undefined

const person = {};
console.log(person.age); // Output: undefined



let y = null;
console.log(y); // Output: null

const obj = { name: null, age: 26 };
console.log(obj.name); // Output: null


/* En resumen, undefined indica que una variable no ha sido asignada o que una propiedad no existe */
/* Mientras que null se utiliza para indicar explícitamente que una variable no tiene un valor válido o que una propiedad ha sido intencionalmente asignada como nula. */