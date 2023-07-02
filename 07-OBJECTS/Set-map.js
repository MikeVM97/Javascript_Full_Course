// Sets:
// El objeto Set es una colección de valores únicos, lo que significa que no puede contener duplicados.
// Los Sets son útiles cuando necesitas almacenar elementos sin un orden específico y garantizar que no haya elementos duplicados.

// Métodos Set: (add(), delete(), has(), clear(), forEach(), values(), keys(), entries())
// Propiedades Set: (size)

const fruits = new Set();

console.log(typeof fruits); // Output: object
console.log(fruits instanceof Set); // Output: true

console.log(fruits); // Output: Set(0) {}

fruits.add('apple');
fruits.add('banana');
fruits.add('orange');
fruits.add('apple'); // No se agregará, ya que 'apple' ya existe en el Set

console.log(fruits.size); // Output: 2

console.log(fruits.has('banana')); // Output: true

fruits.delete('banana');

console.log(fruits.size); // Output: 1

fruits.forEach(item => {
  console.log(item);
});
// Output:
// apple

console.log(fruits); // Output: Set(2) {'apple', 'orange'}


// Obtener un Set iterable
const myIterator = fruits.values(); // Returns [object Set Iterator]
console.log(myIterator); // Output: [Set Iterator] {'apple', 'orange'}

for (const item of myIterator) {
  // Any code here
  console.log(`Iterando con for..of, item: ${item}`);
}

console.log(fruits.keys()); // Output: [Set Iterator] {'apple', 'orange'}
console.log(fruits.entries()); // Output: [Set Entries] {['apple', 'apple'], ['orange', 'orange']}


// También podemos crear un Set a partir de un objeto existente
const countries = ['Peru', 'Venezuela', 'Chile'];
const obj = { a: 10, b: 20, c: 30 };

const paises = new Set(countries);
console.log(paises); // Output: Set(3) {'Peru', 'Venezuela', 'Chile'}

const myObj = new Set(Object.values(obj));
console.log(myObj); // Output: Set(3) { 10, 20, 30 }

// Recuerda que tanto Set como Map son objetos de Javascript, por tanto la notación de estos es con llaves {}









// Maps:
// El objeto Map es una colección de pares clave-valor donde las claves y los valores pueden ser de cualquier tipo.
// A diferencia de los Sets, los Maps mantienen un orden de inserción, lo que significa que los elementos se pueden iterar en el mismo orden en que se agregaron.

// Métodos Map: (set(), get(), clear(), delete(), has(), forEach(), entries(), keys(), values())
// Propiedades Map: (size)

const map = new Map();

map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

console.log(map); // Output: Map(3) {'name' => 'John', 'age' => 30, 'city' => 'New York'}

console.log(map.size); // Output: 3

console.log(map.get('name')); // Output: 'John'
console.log(map.get('hobby')); // Output: undefined

map.delete('age'); // Eliminando el par clave-valor: 'age' => 30

console.log(map.size); // Output: 2

map.set('city', 'Florida'); // Reemplazando un par clave-valor ya existente

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: John
// city: Florida

console.log(map); // Output: Map(2) {'name' => 'John', 'city' => 'Florida'}

console.log(map.has('name'), map.has('age')); // Output: true, false


// Obtener un Map iterable
const mapIterable1 = map.values();
console.log(mapIterable1); // Output: [Map Iterator] {'John', 'Florida'}

const mapIterable2 = map.keys();
console.log(mapIterable2); // Output: [Map Iterator] {'name', 'city'}

const mapIterable3 = map.entries();
console.log(mapIterable3); // Output: [Map Entries] {['name', 'John'], ['city', 'Florida']}

for (const item of mapIterable1) {
  console.log(`Iterando con for..of, item: ${item}`);
}


// También podemos crear Maps a partir de un objeto existente
const user = {
  firstName: 'Rick',
  lastName: 'Morty',
  age: 36,
}

const array = [['a', 11], ['b', 22], ['c', 33]];

const map2 = new Map(Object.entries(user));
console.log(map2); // Output: Map(3) {'firstName' => 'Rick', 'lastName' => 'Morty', 'age' => 36}

const map3 = new Map(array);
console.log(map3); // Output: Map(3) {'a' => 11, 'b' => 22, 'c' => 33}


// Objetos como keys
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

const frutas = new Map();

frutas.set(apples, 500);
frutas.set(bananas, 300);
frutas.set(oranges, 200);

console.log(frutas);
/* Output:
Map(3) {
  { name: 'Apples' } => 500,
  { name: 'Bananas' } => 300,
  { name: 'Oranges' } => 200
} */