// 1. Método call
// El método call se utiliza para llamar a una función con un valor específico de this y pasar los argumentos de la función de forma individual separados por comas.

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person2 = {
  firstName: "Mike",
  lastName: "Vivanco",
}

const fullName = person.fullName.call(person);
console.log(fullName); // Output: John Doe

const fullName2 = person.fullName.call(person2);
console.log(fullName2); // Output: Mike Vivanco

/* -------------------------------------------- */
// Los métodos call, apply y bind, también aceptan argumentos
const myPerson = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}

const person3 = {
  firstName:"John",
  lastName: "Doe"
}

const fullName3 = myPerson.fullName.call(person3, "Oslo", "Norway");
console.log(fullName3); // Output: John Doe, Oslo, Norway

// Otro ejemplo
function getSum(a, b, c) {
  return a + b + c;
}

const resultado = getSum.call(null, 2, 3, 4);
console.log(resultado); // Output: 9









// 2. Método apply
// El método apply es similar al método call, pero en lugar de pasar los argumentos de la función de forma individual, se pasan como un array.

const persona = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person4 = {
  firstName: "Mary",
  lastName: "Jeane"
}

const result = persona.fullName.apply(person4);
console.log(result); // Output: Mary Jeane
// Parece ser lo mismo que el método call, pero, cual es la diferencia?


/* La diferencia está en los argumentos:
El método call() toma los argumentos por separado.
El método apply() toma los argumentos como una matriz.
El método apply() es muy útil si desea utilizar una matriz en lugar de una lista de argumentos. */

const getPerson = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}

const person5 = {
  firstName:"Philip",
  lastName: "Gunner"
}

const result2 = getPerson.fullName.apply(person5, ["Oslo", "Norway"]);
console.log(result2); // Output: Philip Gunner, Oslo, Norway


// Otro ejemplo
function getX(age) {
  return this.name + ", age: " + age
}

const person6 = {
  name: "Maycol"
}

const result3 = getX.apply(person6, [26]);
console.log(result3); // Output: Maycol, age: 26



// Simular un método Max() en arreglos

const max = Math.max(1, 2, 3, 4);
console.log(max); // Output: 4

// Utilizando apply
const numbers = [1, 2, 3, 4, 5];

const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // Output: 5









// 3. Método bind
// El método bind se utiliza para crear una nueva función que tiene un valor específico de this y, opcionalmente, algunos argumentos predefinidos.

const setPerson = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  greet: function(age) {
    return this.firstName + ", age: " + age
  },
};

const person7 = {
  firstName:"Angel",
  lastName: "Vivanco"
}

const printFullName = setPerson.fullName.bind(person7);
// printFullName es una función que necesita ser invocada
console.log(printFullName()); // Output: Angel Vivanco

const greetings = setPerson.greet.bind(person7, [40]);
// El segundo argumento, puede ser argumentos separados por coma o un arreglo
console.log(greetings()); // Output: Angel, age: 40



// Otro ejemplo
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

const greetHello = greet.bind(null, 'Hello', 'John');
greetHello(); // Output: Hello, John!

const greetGoodbye = greet.bind(null, 'Goodbye');
greetGoodbye('Alice'); // Output: Goodbye, Alice!

const greetMorning = greet.bind(null);
greetMorning('Morning', 'Mike');






/* CONCLUSIONES */
/* Los 3 métodos sirven para tomar prestado métodos de otros objetos, este es su principal uso */
/* objetoPrestado.metodoPrestado.metodoCall(objetoAejecutar, argumentos) <-- principal uso */
/* Su principal uso se basa en prestar métodos para otros objetos, por tanto, tener su primer parámetro como null, es no sacarle provecho a estos 3 métodos */
/* Los argumentos a partir de la posición 1, son opcionales, y varian la forma en que se usan */
/* En call, los argumentos están separados por coma */
/* En apply, los argumentos son un arreglo */
/* En bind, los argumentos puede ser o un arreglo, o separado por comas */