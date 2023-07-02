// String.Prototype.at()

// Recibe como parámetro un valor entero(número) y devuelve una cadena en base a la posición del parámetro.
// Puede recibir valores positivos o negativos, para valores positivos, cuenta hacia adelante, y para valores negativos cuenta hacia atrás.
// El parámetro permitido máximo es la longitud de la cadena de texto a evaluar.

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.length); // Output: 44
let index = 5; // Max permitido: 44, o devolverá undefined

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Output: "Using an index of 5 the character returned is u"

index = -4; // Max permitido: -44, o devolverá undefined

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Output: "Using an index of -4 the character returned is d"






// Una función que retorna el último caracter de una cadena de texto dada.
function returnLast(arr) {
  return arr.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef)); // '2'




// Comparando métodos

const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // 't'
