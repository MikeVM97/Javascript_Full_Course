// String.Prototype.charAt()

// Recibe como parámetro un entero positivo y devuelve una cadena en base a la posición del parámetro.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Output: "The character at index 4 is q"




const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`); // Output: 'B'
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`); // Output: 'B'
console.log(`The character at index 1   is '${anyString.charAt(1)}'`); // Output: 'r'
console.log(`The character at index 2   is '${anyString.charAt(2)}'`); // Output: 'a'
console.log(`The character at index 3   is '${anyString.charAt(3)}'`); // Output: 'v'
console.log(`The character at index 4   is '${anyString.charAt(4)}'`); // Output: 'e'
console.log(`The character at index 999 is '${anyString.charAt(999)}'`); // Output: ''
