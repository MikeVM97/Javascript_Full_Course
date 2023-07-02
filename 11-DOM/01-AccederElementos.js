// El DOM (Document Object Model) es una representación estructurada de un documento HTML o XML que proporciona una interfaz para interactuar y manipular elementos en la página web.
// En JavaScript, puedes acceder y modificar el contenido y la apariencia de una página web a través del DOM.

// 1. ACCEDER A ELEMENTOS HTML

// 1.1 Acceder a elementos por su id (getElementById)
// Retorna un nodo HTML
const title = document.getElementById('title');
console.log(title); // <h1 id="title">
console.log(typeof title); // Output: object
// Todos los elementos HTML son objetos de Javascript



const myList = document.getElementById('list-unordered');
console.log(myList); // <ul id="list-unordered">

// 1.2 Acceder a elementos por su clase (getElementsByClassName)
// Retorna una Colección HTML iterable (object)
const items = document.getElementsByClassName('item');
console.log(items); // HTMLCollection { 0: li.item, 1: li.item, 2: li.item, length: 3 }

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// 1.3 Acceder a elementos por su etiqueta(getElementsByTagName)
// Retorna una Colección HTML iterable (object)
const list = document.getElementsByTagName('ul');
console.log(list); // HTMLCollection { 0: ul, length: 1 }

const elements = document.getElementsByTagName('li');
console.log(elements); // HTMLCollection { 0: li.item, 1: li.item, 2: li.item, length: 3 }

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}

// 1.4 Acceder a elementos por su atributo "name" (getElementsByName)
// Retorna una lista iterable de Nodos HTML (array)
const usersInput = document.getElementsByName('user');
console.log(usersInput); // NodeList [ input, input ]

usersInput.forEach(user => console.log(user)) 

const formAdmin = document.getElementsByName('form-admin');
console.log(formAdmin); // NodeList [ form ]

// 1.5 Acceder a un elemento, por etiqueta o cualquier atributo (querySelector)
// Retorna un nodo HTML
const newList = document.querySelector('ul');
console.log(newList); // <ul id="list-unordered">

// En caso de haber varios elementos, retorna el primero que encuentre
const firstLi = document.querySelector('li');
console.log(firstLi.classList); // DOMTokenList [ "item", "first" ]

const formUser = document.querySelector('[name="form-user"]');
console.log(formUser); // <form action="" name="form-user">

const thirdLi = document.querySelector('.third');
console.log(thirdLi.classList); // DOMTokenList [ "item", "third" ]

const heading = document.querySelector('#title');
console.log(heading); // <h1 id="title">

// 1.6 Acceder a un grupo de elementos, por etiqueta o cualquier atributo (querySelectorAll)
// Retorna una lista iterable de Nodos HTML (array)
const liGroup = document.querySelectorAll('li');
console.log(liGroup); // NodeList(3) [ li.item.first, li.item.second, li.item.third ]

liGroup.forEach(li => {
  console.log(li);
})

console.log(liGroup.length);