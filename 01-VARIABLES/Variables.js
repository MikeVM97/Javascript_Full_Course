/* VAR, LET y CONST */

var age; // Crear variable sin ser inicializada ✅
var counter = 1;
var counter = 2; // Redeclarar variable ✅
counter = 3; // Reasignar valor de variable ✅
// Afectados por el Hoisting ✅

let longitud; // Crear variable sin ser inicializada ✅
let nombre = 'Jack';
// let nombre = 'Reacher'; <-- Redeclarar variable ❌
nombre = 'Reacher'; // Reasignar valor de variable ✅
// Afectados por el Hoisting ❌

// const apellido <-- Crear variable sin ser inicializada ❌
const lastName = 'Gray';
// const lastName = 'Black; <-- Redeclarar variable ❌
// lastName = 'Wick'; <-- Reasignar valor de variable ❌
// Afectados por el Hoisting ❌

/* VAR Y LET SON VARIABLES MIENTRAS QUE CONST ES UNA CONSTANTE */
/* EN RESUMEN: SE RECOMIENDA USAR LET COMO VARIABLE Y CONST COMO UNA CONSTANTE */
/* LET PARA VALORES QUE DESEAMOS QUE CAMBIEN CON ALGUNA INTERACCIÓN */
/* CONST PARA VALORES QUE DESEAMOS QUE NO CAMBIEN CON ALGUNA INTERACCIÓN */