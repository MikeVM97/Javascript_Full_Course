// RECURSION

// La recursión en JavaScript es una técnica donde una función se llama a sí misma dentro de su propio cuerpo. Esto permite que la función se repita de forma iterativa, resolviendo subproblemas más pequeños en cada llamada recursiva hasta alcanzar un caso base que detiene la recursión.

// La recursión es especialmente útil cuando se trata de resolver problemas que se pueden dividir en subproblemas más pequeños y similares al problema original. Al resolver los subproblemas y combinar sus soluciones, se puede llegar a la solución completa del problema original.

function factorial(n) {
  // Caso base: el factorial de 0 es 1
  if (n === 0) {
    return 1;
  }
  
  // Caso general: el factorial de n es n multiplicado por el factorial de (n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(5));
// Salida: 120

// La recursión es una técnica poderosa y flexible que se utiliza en muchos algoritmos y problemas en JavaScript y en la programación en general. Permite soluciones elegantes y concisas para problemas que se pueden dividir en subproblemas más pequeños y similares. Sin embargo, es importante comprender y planificar cuidadosamente la recursión para garantizar su correcto funcionamiento.