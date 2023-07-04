// Web Storage API

// La API de almacenamiento web es una sintaxis simple para almacenar y recuperar datos en el navegador.

// The setItem() Method
// window.localStorage.setItem() = localStorage.setItem()
// Recibe 2 parámetros, el 1° es el nombre y el 2° es el valor
const form = document.querySelector('form');
const username = document.querySelector('input[placeholder="username"]');
const password = document.querySelector('input[placeholder="password"]');

form.addEventListener('submit', (e) => {
  // e.preventDefault();
  
  const storage = localStorage.getItem('users');
  
  const obj = {
    user: username.value,
    pass: password.value,
  }

  if (storage !== null) {
    const users = JSON.parse(storage);
    users.push(obj);
    // Guardar items como objetos, es necesario convertir a string
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    const array = [];
    array.push(obj);
    localStorage.setItem('users', JSON.stringify(array));
  }
})

// The getItem() Method
// Recibe 1 parámetro, el nombre del item a recuperar
const usersList = document.querySelector('#users');

// Obtenemos el array de usuarios en formato string
const storage = localStorage.getItem('users');

// Obtenemos el array de usuarios en formato array
const users = JSON.parse(storage);

// Creamos un item para cada usuario y mostramos en pantalla
users.forEach(user => {
  const li = document.createElement('li');
  const name = document.createTextNode(user.user);
  li.appendChild(name);
  usersList.appendChild(li);
});



// Eliminar toda la información del almacenamiento
const remove = document.querySelector('#removeStorage');
remove.addEventListener('click', () => {
  localStorage.clear();
});



// Obtener la longitud de LocalStorage
const getLength = document.querySelector('#getLength');
getLength.addEventListener('click', () => {
  console.log(localStorage.length);
});



// Obtener una key específica según su posición
const getKey = document.querySelector('#getKey');
const input = document.querySelector('input[placeholder="key"]');

getKey.addEventListener('click', () => {
  const position = input.value;
  const value = localStorage.key(position);
  console.log(value);
  // Si existe, retorna la key, de lo contrario retorna undefined
});



// Obtener el objeto Local Storage {}
const getLocalStorage = document.getElementById('getLocalStorage');
getLocalStorage.addEventListener('click', () => {
  console.log(window.localStorage);
});


// Obtener el objeto Session Storage {}
const getSessionStorage = document.getElementById('getSessionStorage');
getSessionStorage.addEventListener('click', () => {
  console.log(window.sessionStorage);
});


// Eliminar keys según su nombre de key ==> localStorage.removeItem()
// Recibe 1 parámetro, el nombre de la key a eliminar
const key_name = document.querySelector('input[placeholder="key name"]');
const value = document.querySelector('input[placeholder="value"]');
const addItem = document.querySelector('#add');

addItem.addEventListener('click', () => {
  localStorage.setItem(key_name.value, value.value);
  // Si la key ya existe, solo reemplazará su valor
  // Si no existe, creará una nueva key con su respectivo valor
});

const searchKey = document.querySelector('input[placeholder="nombre de la key"]');
const deleteItem = document.querySelector('#delete');

deleteItem.addEventListener('click', () => {
  const key_name = searchKey.value;

  if (localStorage.getItem(key_name) !== null) {
    localStorage.removeItem(key_name);
    // Ya sea que la key exista o no, retornará undefined siempre.
  } else {
    alert('La key no existe en el almacenamiento');
  }
});