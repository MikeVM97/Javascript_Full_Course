// CLOSURES

// ChatGPT: 
// Una closure en JavaScript es una combinación de una función y el entorno léxico en el cual fue creada. Permite que la función acceda y recuerde las variables y parámetros de su ámbito externo, incluso después de que ese ámbito haya finalizado su ejecución. Es como un paquete autocontenido que contiene una función junto con las variables que necesita para operar, lo que le permite mantener un estado privado y preservar información entre múltiples llamadas a la función.

// Las closures son útiles para crear funciones con estado y preservar datos privados en JavaScript. Permiten crear una especie de encapsulamiento y mantener el estado local dentro de una función sin exponerlo al ámbito global.

// Mozilla MDN:
// Un closure es un tipo especial de objeto que combina dos cosas: una función, y el entorno en que se creó esa función.

function contador() {
  let contador = 0;

  function incrementar() {
    contador++;
    console.log(contador);
  }

  return incrementar;
}

let miContador = contador(); // miContador se ha convertido en una closure(clausura)
// Al asignar el resultado de contador() a la variable miContador, estamos capturando la función incrementar() junto con su ámbito léxico (que incluye la variable contador) en una closure.

miContador(); // Output: 1
miContador(); // Output: 2

/* ------------------------------------------------------------------------- */

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5); // add5 se ha convertido en una closure
const add10 = makeAdder(10);

console.log(add5(2)); // Output: 7
console.log(add10(2)); // Output: 12

/* ------------------------------------------------------------------------- */
// CLOSURES PRÁCTICOS
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

const size12 = makeSizer(12);
const size16 = makeSizer(16);
const size20 = makeSizer(20);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-16").onclick = size16;
document.getElementById("size-20").onclick = size20;

/* ------------------------------------------------------------------------- */
// EMULANDO MÉTODOS PRIVADOS CON CLOSURES

// IIFE => Inmeadiatly Invoked Function Expression (Expresiones de función ejecutadas inmediatamente)
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

/* ------------------------------------------------------------------------- */

const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter(); // Literal, son instancias de makeCounter
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.

/* ------------------------------------------------------------------------- */
// CADENA DE ALCANCE DEL CLOSURE

// ámbito global
const e = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      // ámbito de funciones externas
      return function (d) {
        // ámbito local
        return a + b + c + d + e;
      };
    };
  };
}

const result1 = sum(1)(2)(3)(4);
console.log(result1); // 20

// También es posible escribir sin funciones anónimas

// ámbito global
const d = 10;

function suma(a) {
  return function suma2(b) {
    return function suma3(c) {
      // ámbito de funciones externas
      return function suma4(d) {
        // ámbito local
        return a + b + c + d + e;
      };
    };
  };
}

const suma2 = suma(1);
const suma3 = suma2(2);
const suma4 = suma3(3);
const result2 = suma4(4);
console.log(result2); // 20
