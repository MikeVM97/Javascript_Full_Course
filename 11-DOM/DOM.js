// MÉTODOS Y PROPIEDADES

// Encontrar elementos HTML

document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByName('attr_name')
document.getElementsByTagName('etiqueta_html')
document.querySelector('valor_de_attr_OR_etiqueta_HTML_aqui')
document.querySelectorAll('valor_de_attr_OR_etiqueta_HTML_aqui')

// Obtener la longitud de una "Colección HTML" o de una "Lista de Nodos"
const elements = document.getElementsByTagName('li');
console.log(elements); // HTMLCollection { 0: li.item, 1: li.item, 2: li.item, length: 3 }
console.log(element.length); // 3

const liGroup = document.querySelectorAll('li');
console.log(liGroup); // NodeList(3) [ li.item.first, li.item.second, li.item.third ]
console.log(liGroup.length); // 3






// Cambiar elementos HTML

element.innerHTML = 'new html content' // Example: paragraph.innerHTML = '<p>I am a paragraph</p>'
element.textContent = 'new text content' // Example: paragraph.textContent = 'I am a paragraph'
element.attribute = 'new value' // Example: image.src = 'source...'; image.width = '100'; etc...
element.style.property = 'new style' // Example: image.style.opacity = '0.5'

element.setAttribute(attribute, value) // Example: image.setAttribute('class', 'profile')






// Añadiendo y Eliminando elementos

document.createElement('element') // Example: const div = document.createElement('div')
document.createTextNode('some Text')
// Example:
// const node = document.createTextNode('This is a div)
// div.appendChild(node)
parentNode.removeChild('childNode')
// Example:
// const parent = document.getElementById('unordered-list');
// parent.removeChild(parent.lastElementChild);
parentNode.appendChild('childNode');
// Example:
// const newLi = document.createElement('li');
// newLi.innerHTML = 'Im a new li element';
// parent.appendChild(newLi);
parentNode.replaceChild('newChild', 'oldChild');
// Example:
// const lastLi = document.createElement('li');
// lastLi.innerHTML = 'Im the last li element'
// parent.replaceChild(lastLi, newLi);
document.write('some text'); // Example: document.write('Hello World');

parentNode.insertBefore('before', 'after')
// Example:
// const nuevoLi = document.createElement('li');
// nuevoLi.textContent = 'Hello World';
// parent.insertBefore(nuevoLi, lastLi);

element.remove()
// Elimina cualquier elemento HTML, Ejemplo:
// nuevoLi.remove()







// Añadiendo Manipuladores de Eventos

document.addEventListener('event', callback);
// Example:
/* parent.addEventListener('onmouseover', () => {
  parent.style.border = "2px solid orange";
}) */
/* document.addEventListener('DOMContentLoaded', () => {
  alert('Hello World');
}) */






// Encontrando objetos HTML

document.baseURI;
document.body;
document.cookie;
document.doctype;
document.documentElement;
document.documentMode;
document.documentURI;
document.embeds;
document.head;
document.images;
document.implementation;
document.lastModified;
document.links;
document.readyState;
document.referrer;
document.scripts;
document.title;
document.URL;







// Navegando entre elementos
const myList = document.getElementsByTagName('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.textContent = 'Item n° ' + (i + 1);
  myList.appendChild(li);
}

// El método children retorna una Colección HTML de los elementos hijo que contiene
const nodes = myList.children;
console.log(childNodes); // HTMLCollection { 0: li.Item n° 1, 1: li.Item n° 2, 2: li.Item n° 3, length: 3 }

// childNodes es un objeto iterable y se puede acceder a sus elementos:
const firstChild = nodes[0];
const secondChild = nodes[1];

// También podemos acceder al primer y último elemento
const first = nodes.firstElementChild;
const last = nodes.lastElementChild;

// Obtener el nombre de etiqueta HTML de cualquier elemento
const nameOfElement = nodes.nodeName;
console.log(nameOfElement); // UL

// Obtener el texto de un elemento
const textFirstChild = firstChild.childNodes[0].nodeValue;
console.log(textFirstChild); // Item n° 1

// Obtener el tipo de nodo de un elemento
console.log(nodes.nodeType); // 1

// Nodos Raíz DOM
// A veces, querremos acceder al body del documento para aplicar estilos o aplicar lógica alguna.
document.body.style.backgroundColor = '#121212';
document.body.appendChild('new element'); // etc...
