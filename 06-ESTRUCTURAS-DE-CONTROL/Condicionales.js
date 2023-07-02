// SENTENCIAS if-else

// Sintaxis
if ("CONCIDIÓN A EVALUAR") {
  "si la condición es true, se ejecutará este bloque de código"
} else {
  "si la condición es false, se ejecutará este bloque de código"
}

// Ejemplo
const age = 18;

if (age >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}








// SENTENCIAS if-else if-else

// Sintaxis
if ("CONCIDIÓN N°1 A EVALUAR") {
  "si la condición n°1 es true, se ejecutará este bloque de código"
} else if ("CONDICIÓN N°2 A EVALUAR") {
  "si la condición n°1 y n°2 son true, se ejecutarán ambos bloques de código"
  "si únicamente la condición actual n°2 es true, solo se ejecutará este bloque de código"
} else {
  "solo si ninguna condición es true, se ejecutará este bloque de código"
}

// Ejemplo
const score = 85;

if (score >= 90) {
  console.log("Excelente");
} else if (score >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}







// SENTENCIA switch

const day = "viernes";

switch (day) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "viernes":
    console.log("Hoy es viernes");
    break;
  default:
    console.log("Hoy no es un día especial");
}





// ANIDAMIENTO DE SENTENCIAS if-else

const edad = 25;
const isStudent = true;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
  if (isStudent) {
    console.log("Eres estudiante.");
  } else {
    console.log("No eres estudiante.");
  }
} else {
  console.log("Eres menor de edad.");
}





// OPERADORES LÓGICOS

// Operador AND(&&)
if (edad >= 18 && isStudent) {
  console.log("Eres mayor de edad y estudiante.");
} else {
  console.log("No cumples ambas condiciones.");
}

// Operador OR(||)
const hasDriverLicense = true;
const hasCar = true;

if (hasDriverLicense || hasCar) {
  console.log("Tienes licencia de conducir o un automóvil (o ambos).");
} else {
  console.log("No tienes licencia de conducir ni un automóvil.");
}

// Operador NOT(!)
const isAuthenticated = true;

if (!isAuthenticated) {
  console.log("Usuario no autenticado. Por favor, inicia sesión.");
} else {
  console.log("Usuario autenticado. ¡Bienvenido!");
}

// Combinación de Operadores lógicos
const isAdmin = true;
const hasPermission = true;
const isSuperUser = true;

if ((isAdmin || isSuperUser) && hasPermission) {
  console.log("Tienes permisos de administrador o de superusuario y tienes los permisos requeridos.");
} else {
  console.log("No tienes los permisos necesarios.");
}









// OPERADOR TERNARIO(?:)

// Sintaxis
"CONDICIÓN" ? "TRUE > ejecuta" : "FALSE > ejecuta"

// Ejemplos
const isLoggedIn = true;
const greeting = isLoggedIn ? "Bienvenido de nuevo" : "Inicia sesión por favor";
console.log(greeting); // Output: Bienvenido de nuevo
