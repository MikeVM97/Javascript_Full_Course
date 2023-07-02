// Los objetos son una de las características fundamentales de JavaScript y se utilizan para representar entidades o conceptos del mundo real en el código. Los objetos en JavaScript son colecciones de propiedades, donde cada propiedad consiste en una clave (nombre) y un valor. Puedes pensar en los objetos como contenedores que almacenan información relacionada.

// 1. Creación de un objeto
// Notación de objeto literal
const persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Desarrollador',
};

// 2. Acceso a las propiedades del objeto:
console.log(persona.nombre); // Output: 'Juan'
console.log(persona.edad); // Output: 30
console.log(persona.profesion); // Output: 'Desarrollador'

// o también:
console.log(persona["nombre"]); // Output: 'Juan'
console.log(persona["edad"]); // Output: 30
console.log(persona["profesion"]); // Output: 'Desarrollador'

// 3. Modificación de las propiedades del objeto:
persona.edad = 31;
console.log(persona.edad); // Output: 31

persona["profesion"] = 'Ingeniero';
console.log(persona.profesion); // Output: 'Ingeniero'

// 4. Agregar propiedades al objeto:
persona.hobby = 'Fotografía';
console.log(persona.hobby, persona); // Output: 'Fotografía'

// 5. Eliminar propiedades del objeto:
delete persona.hobby;
console.log(persona.hobby, persona); // Output: undefined

// 6. Propiedades con nombres dinámicos:
const key = 'nombre';
console.log(persona[key]); // Output: 'Juan'

// 7. Iteración de propiedades:
for (let key in persona) {
  console.log(key + ': ' + persona[key]);
}
/* Output:
  nombre: Juan
  edad: 31
  profesion: Ingeniero
*/

// 8. Métodos en objetos:
const person = {
  firstName: 'Mike',
  saludar: function () {
    console.log('Hola, soy ' + this.firstName);
  },
  goodbye() {
    console.log('Hasta pronto ' + this.firstName);
  },
};

person.saludar(); // Output: 'Hola, soy Mike'
person.goodbye(); // Output: 'Hasta pronto, Mike'

// 9. Duplicación de objetos:
// spread operator(...)
const person2 = { ...person };
console.log(person, person2);

person2.lastName = 'Vivanco';
// Cada objeto mantiene sus propiedades independientes
console.log(person, person2);

// 10. Objetos anidados
// Los objetos pueden contener más objetos(objetos literales o arrays) anidados
const myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
console.log(myObj.cars.car2); // Output: 'BMW'

const myObj2 = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
} 
console.log(myObj2.cars[2]); // Output: {name:"Fiat", models:["500", "Panda"]}

// 11. Propiedades y métodos computados
const dynamicKey = 'edad';

const persona6 = {
  nombre: 'Juan',
  [dynamicKey]: 30,
  saludar() {
    console.log('Hola, soy ' + this.nombre);
  },
};

console.log(persona6[dynamicKey]); // Output: 30
persona6.saludar(); // Output: 'Hola, soy Juan'

// 12. Propiedades getters y setters:
// La diferencia entre funciones(métodos) y getters está en la sintaxis
// los métodos deben ser llamados así: person.getFullName()
// los getters deben ser llamados así: person.getFullName
const user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// invocando el método get
console.log(user.fullName); // Output: 'John Smith'
// invocando el método set
user.fullName = "Alice Cooper";
console.log(user.fullName); // Output: 'Alice Cooper'

// 13. Capturar los pares key-value de los objetos
const key_value = Object.entries(persona);
console.log(key_value); // Output: [['nombre', 'Pedro'], ['edad', 31], ['profesion', 'Ingeniero']]

// 14. Capturar los valores de los objetos
const values = Object.values(persona);
console.log(values); // Output: ['Pedro', 31, 'Ingeniero']

// 15. Capturar las llaves de los objetos
const keys = Object.keys(persona);
console.log(keys); // Output: ['nombre', 'edad', 'profesion']

// 16. Propiedades de solo lectura:
const persona7 = {};

Object.defineProperty(persona, 'nombre', {
  value: 'Juan',
  writable: false,
});

persona7.nombre = 'Pedro'; // No se puede asignar un nuevo valor
console.log(persona7.nombre); // Output: 'Juan'



// 17. Propiedades heredadas:
const persona9 = {
  nombre: 'Juan',
};

const empleado = Object.create(persona9);
empleado.puesto = 'Desarrollador';

console.log(empleado.nombre); // Output: 'Juan'
console.log(empleado.puesto); // Output: 'Desarrollador'

// 18. Uso de Object.assign():
const persona10 = {
  nombre: 'Juan',
};

const detalles = {
  edad: 30,
  profesion: 'Desarrollador',
};

const personaCompleta = Object.assign({}, persona10, detalles);

console.log(personaCompleta);
/* Output:
   {
     nombre: 'Juan',
     edad: 30,
     profesion: 'Desarrollador'
   }
*/

// 19. Verificación de propiedades
const hasProfession = persona.hasOwnProperty('profesion');
console.log(hasProfession); // Output: true

const hasHobby = persona.hasOwnProperty('hobby');
console.log(hasHobby); // Output: false

// 20. Congelar un objeto
const frozen = Object.freeze(persona);
persona.nombre = 'Pedro';
persona.hobby = 'Lectura';
console.log(persona.nombre, persona.hobby); // Output: Juan, undefined
console.log(Object.isFrozen(persona)); // Output: true

// 21. Funciones constructoras de Objetos
function Persona(nombre, edad) {
  this.firstName = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log(`Hola, mi nombre es ${this.firstName} y tengo ${this.edad} años.`);
  };
}

const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('María', 25);

console.log(persona1.firstName); // Output: 'Juan'
console.log(persona1.edad); // Output: 30
persona1.saludar(); // Output: 'Hola, mi nombre es Juan y tengo 30 años.'

console.log(persona2.firstName); // Output: 'María'
console.log(persona2.edad); // Output: 25
persona2.saludar(); // Output: 'Hola, mi nombre es María y tengo 25 años.'

// Añadir una propiedad a un objeto
persona1.lastName = 'Ezquivel';
persona2.lastName = 'Pilar';

// Añadir un método a un objeto
persona1.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}

console.log(persona1.getFullName()); // Output: "Juan Ezquivel"

// Añadir una propiedad al constructor
Persona.prototype.nationality = "English";

// Añadir métodos al constructor
Persona.prototype.sayGoodBye = function() {
  return 'Goodbye !';
}

Persona.prototype.changeNationality = function(nationality) {
  this.nationality = nationality
}

console.log(Persona);
console.log(persona1);

const persona3 = new Persona('Mike', 26);
console.log(persona3);
console.log(persona3.nationality); // Output: "English"
console.log(persona3.sayGoodBye()); // Output: 'Goodbye !'
persona3.changeNationality("Spanish") 
console.log(persona3.nationality); // Output: "Spanish"