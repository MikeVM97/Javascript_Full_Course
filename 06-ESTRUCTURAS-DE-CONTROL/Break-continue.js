// Las sentencias break y continue son utilizadas en bucles en JavaScript para controlar el flujo de ejecución.

// break
// La sentencia break se utiliza para detener la ejecución de un bucle de manera abrupta.

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output: 0, 1, 2





// continue
// La sentencia continue se utiliza para saltar una iteración en un bucle y continuar con la siguiente iteración.

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
// Output: 0, 1, 3, 4




/* Tanto break como continue son útiles para controlar el flujo de ejecución en bucles y permiten tomar decisiones basadas en condiciones específicas dentro del bucle. */