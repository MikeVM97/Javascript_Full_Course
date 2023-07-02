// Las clases en JavaScript proporcionan una forma de definir objetos y crear instancias de ellos. Permiten organizar la estructura y el comportamiento de un objeto en un solo lugar.

// Las Clases no son afectados por el Hoisting.

// 1. Declaración de una clase:
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`¡Hola, soy ${this.nombre}!`);
  }
}

// 2. Creación de instancias
const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('María', 25);

console.log(persona1);

persona1.saludar(); // Output: ¡Hola, soy Juan!
persona2.saludar(); // Output: ¡Hola, soy María!

// 3. Herencia de clases:
class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad);
    this._carrera = carrera;
  }
  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.carrera}.`);
  }
  // También es posible usar Getters y Setters
  get carrera() {
    return this._carrera;
  }
  set carrera(x) {
    this._carrera = x;
  }
}

// 4. Métodos estáticos:
// Los métodos estáticos se pueden llamar directamente en la clase sin necesidad de crear una instancia.
// Son útiles para definir funciones auxiliares o utilidades relacionadas con la clase.
class Utilidades {
  static sumar(a, b) {
    return a + b;
  }

  static restar(a, b) {
    return a - b;
  }
}

console.log(Utilidades.sumar(5, 3)); // Output: 8
console.log(Utilidades.restar(10, 4)); // Output: 6
