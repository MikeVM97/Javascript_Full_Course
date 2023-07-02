// Los callbacks en JavaScript son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que cierto proceso o tarea ha finalizado.
// Son ampliamente utilizados en programación asíncrona para controlar el flujo de ejecución.

// 1. Callback básico:
function imprimirResultado(resultado) {
  console.log(`El resultado es: ${resultado}`);
}

function sumar(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}

sumar(5, 3, imprimirResultado); // Output: El resultado es: 8

// 2. Callback en una función asíncrona:
function obtenerDatosDeUsuario(id, callback) {
  setTimeout(() => {
    const usuario = {
      id: id,
      nombre: "John",
      edad: 30,
    };
    callback(usuario);
  }, 2000);
}

function mostrarDatosDeUsuario(usuario) {
  console.log(`Id: ${usuario.id}`);
  console.log(`Nombre: ${usuario.nombre}`);
  console.log(`Edad: ${usuario.edad}`);
}

obtenerDatosDeUsuario(1, mostrarDatosDeUsuario);

// 3. Uso de callbacks con funciones de orden superior:
function ejecutarOperacion(a, b, operacion) {
  const resultado = operacion(a, b);
  console.log(`El resultado es: ${resultado}`);
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

ejecutarOperacion(5, 3, sumar); // Output: El resultado es: 8
ejecutarOperacion(5, 3, restar); // Output: El resultado es: 2

// 4. Waiting for intervals
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  console.log(time);
}
