const addTodo = document.querySelector('#addTodo');
const todoList = document.querySelector('#todoList');
const todo = document.querySelector('#inputTodo');

let value = '';

todo.addEventListener('change', (e) => {
  value = e.target.value;
});

// Crear un nuevo elemento HTML (createElement('element'))
addTodo.addEventListener('click', () => {
  // Creación de un elemento <li></li>
  const li = document.createElement('li');
  // Insertando texto al elemento creado
  li.innerHTML = value;
  // Agregando el elemento creado a una etiqueta <ul></ul>
  todoList.appendChild(li);
});