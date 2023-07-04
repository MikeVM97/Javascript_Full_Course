//  La Web Workers API es una API de JavaScript que permite ejecutar tareas en segundo plano, sin afectar la interfaz de usuario principal de una página web. Esto permite que las aplicaciones web sean más receptivas y mejoren la experiencia del usuario al realizar operaciones intensivas en CPU o que requieran mucho tiempo sin bloquear la interfaz de usuario.

// VERIFICAR SI EL BROWSER SOPORTA Web Worker
if (typeof(Worker) !== "undefined") {
  console.log('Web Worker supported 😀');
} else {
  console.log('No Web Worker support 🙁');
} 



// CREAR UN WEB WORKER
let w;

const startWorker = document.getElementById('startWorker');
const stopWorker = document.getElementById('stopWorker');

startWorker.addEventListener('click', () => {
  if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("counter").innerHTML = event.data;
  };
});

stopWorker.addEventListener('click', () => {
  // Terminar un Web Wroker
  w.terminate();
  // Reusar el Web Worker
  w = undefined;
});


/* Dado que los Web Workers están en archivos externos, no tienen acceso a los siguientes objetos de JavaScript:
El objeto window
El objeto document
El objeto padre */


const worker = new Worker('demo_workers.js');
const getFactorial = document.getElementById('getFactorial');

getFactorial.addEventListener('click', () => {
  const inputNumber = document.getElementById('inputNumber').value;
  worker.postMessage(inputNumber);
});

worker.onmessage = function(event) {
  const result = event.data;
  document.getElementById('result').textContent = 'Factorial: ' + result;
};


// MÉTODOS
// postMessage(data), terminate()

// PROPIEDADES
// onmessage, onerror, onmessageerror, postMessage