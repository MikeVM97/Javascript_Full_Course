// SENTENCIAS try-catch, throw y finally


// El bloque try-catch en JavaScript se utiliza para manejar errores de manera controlada.
// Permite que el código intente ejecutar una sección peligrosa y, si ocurre algún error, capturarlo y tomar acciones adecuadas en consecuencia.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function divide(a, b) {
  if (b === 0) {
    // Con throw, podemos crear errores personalizados
    throw new Error("División por cero no es posible");
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new CustomError("La división solo está permitido con números");
  }
  return a / b;
}

try {
  // El bloque try se encarga de capturar los posibles errores
  const result = divide(10, 0);
  console.log(result);
} catch (error) { // EL objeto error tiene varios métodos.
  console.log("Se ha producido un error:", error.message);
} finally {
  console.log("Operación finalizada");
}

try {
  const result = divide('s', 10);
  console.log(result);
} catch (error) {
  console.log("Se ha producido un error:", error.message);
} finally {
  console.log("Operación finalizada");
}