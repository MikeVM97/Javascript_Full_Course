const username = document.querySelector('[type="text"]');
const email = document.querySelector('[type="email"]');
const submit = document.querySelector('[type="submit"]');
const message = document.querySelector('.message-area');

let usernameText = '';
let emailText = '';
let messageText = '';

// Escuchar un evento con addEventListener
// Recibe 2 parámetros
// El 1° es el tipo de evento
// El 2° es un callback, una función a ejecutar para el evento dado
username.addEventListener('change', (e) => {
  // Asinar lo escrito en el campo a una variable
  usernameText = e.target.value;
});

email.addEventListener('change', (e) => {
  emailText = e.target.value;
});

message.addEventListener('change', (e) => {
  messageText = e.target.value;
});

submit.addEventListener('submit', (e) => {
  // preventDefault() previene el comportamiento por default de algunas funciones.
  // Probar el evento activando/desactivando el comportamiento por default.
  e.preventDefault();

  const finalMessage = `username: ${usernameText}, email: ${emailText}, message: ${messageText}`;
  console.log(finalMessage);
  // alert(finalMessage);
});

// EXISTEN MUCHOS TIPOS DE EVENTOS EN JAVASCRIPT, ALGUNOS DE ESTOS SON:
// 'click', 'change', 'submit', 'resize', etc...