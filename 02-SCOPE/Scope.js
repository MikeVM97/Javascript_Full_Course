// ÁMBITO DE EJECUCIÓN DE VARIABLES, CONSTANTES Y FUNCIONES (SCOPE)

// GLOBAL SCOPE
var x = 1;
let y = 2;
const z = 3;
// Estas variables y constantes, pueden ser usadas en el ámbito global y en cualquier ámbito local

// LOCAL SCOPE
function print() {
  var x = 30;
  let y = 40;
  // const z = 50;
  let cadena = true;
  // Estas variables y/o constantes, solo pueden ser usadas en el ámbito en el cual fueron creados
  // Y también en cualquier ámbito descendiente de éste.
  // Es decir, que su alcance está limitado a ciertos ámbitos

  if (cadena) {
    var abc = 100;
    let qwe = "200";
  }

  console.log(abc) // Output: 100
  // console.log(qwe) // ReferenceError: qwe is not defined

  function add() {
    // En este caso, la variable "y" puede ser usada en este ámbito, ya que este ámbito es descendiente
    y = y + 1;
    var a = 'a';
    let b = 'b';
    const c = 'c';
  }

  add();
  
  console.log(x); // Output: 30
  console.log(y); // Output: 41
  console.log(z); // Output: 3

  // console.log(a); // ReferenceError: a is not defined
  // console.log(b); // ReferenceError: b is not defined
  // console.log(c); // ReferenceError: c is not defined
}

// console.log(cadena); // ReferenceError: cadena is not defined
// add(); // ReferenceError: add is not defined

// Las variables, constantes y funciones creadas en un ámbito local, no pueden ser usadas en un ámbito padre(ascendente)

print();

/* EN RESUMEN: SCOPE ES, EL ÁMBITO DE EJECUCIÓN EN EL CUAL VIVE UNA VARIABLE, CONSTANTE O UNA FUNCIÓN */
/* ESTOS PUEDEN SER, GLOBAL O LOCAL */
/* NO ES POSIBLE LLAMAR A UNA VARIABLE, CONSTANTE O FUNCIÓN EN UN ÁMBITO SUPERIOR */
/* SI ES POSIBLE LLAMAR A UNA VARIABLE, CONSTANTE O FUNCIÓN EN UN ÁMBITO INFERIOR */
/* CADA BLOQUE CON LLAVES(condicionales, bucles, etc) ES UN ÁMBITO DIFERENTE, EXCEPTO PARA LAS VARIABLES(var) */

/* SCOPE: ÁMBITO DE EJECUCIÓN, ALCANCE */