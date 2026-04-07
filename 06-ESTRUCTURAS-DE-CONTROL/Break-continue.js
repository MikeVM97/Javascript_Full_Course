// Las sentencias break y continue son utilizadas en bucles en JavaScript para controlar el flujo de ejecución.

// break
// Termina la iteración y termina el bucle.
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output: 0, 1, 2

// continue
// Termina la iteración saltando a la siguiente iteración.
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
// Output: 0, 1, 3, 4

/* Tanto break como continue son útiles para controlar el flujo de ejecución en bucles y permiten tomar decisiones basadas en condiciones específicas dentro del bucle. */
