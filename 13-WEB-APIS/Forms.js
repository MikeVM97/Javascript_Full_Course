// Una API web es el sueño de un desarrollador.

// ✅ Puede ampliar la funcionalidad del navegador.
// ✅ Puede simplificar enormemente funciones complejas.
// ✅ Puede proporcionar una sintaxis fácil para código complejo.

// API ==> Application Programming Interface
// Una Web API es una interfaz de programación de aplicaciones para la Web.
// Una API de navegador puede ampliar la funcionalidad de un navegador web.
// Una API de servidor puede ampliar la funcionalidad de un servidor web.





// Web Forms API


// VALIDACIÓN DE FORMULARIOS

// checkValidty()
// Este método se utiliza para verificar si un formulario cumple con todas las restricciones de validación definidas en sus campos. Retorna true si el formulario es válido y false si no lo es.
const form1 = document.getElementById("checkValidity");
const submitButton = form1.querySelector('button[type="submit"]');

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (form1.checkValidity()) {
    console.log("El formulario es válido. Se puede enviar.");
    // Aquí podrías enviar los datos del formulario a través de una petición AJAX, por ejemplo.
  } else {
    console.log(
      "El formulario es inválido. Corrige los errores antes de enviar."
    );
  }
});



// setCustomValidity()
// Este método se utiliza para establecer un mensaje de error personalizado en un campo de formulario. Puedes usarlo para agregar validaciones personalizadas y proporcionar mensajes de error específicos.
const form2 = document.getElementById('setCustomValidity');
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

pass2.addEventListener("input", function () {
  if (pass1.value !== pass2.value) {
    pass2.setCustomValidity("Las contraseñas no coinciden");
  } else {
    pass2.setCustomValidity("");
  }
});

form2.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form2.checkValidity()) {
    console.log("El formulario es válido. Se puede enviar.");
  } else {
    console.log(
      "El formulario es inválido. Corrige los errores antes de enviar."
    );
  }
});


// El objeto validity
// Propiedades: customError, patterMismatch, rangeOverflow, rangeUnderflow, stepMismatch, tooLong, typeMismatch, valueMissing, valid.
const form3 = document.getElementById('validity');
const emailInput = document.getElementById('emailInput');

form3.addEventListener('click', (e) => {
  e.preventDefault();
  if (emailInput.validity.valid) {
    console.log('El campo de correo electrónico es válido.');
  } else {
    console.log('El campo de correo electrónico es inválido.');
    if (emailInput.validity.valueMissing) {
      console.log('El campo de correo electrónico es requerido.');
    }
    if (emailInput.validity.typeMismatch) {
      console.log('El valor ingresado no es una dirección de correo electrónico válida.');
    }
  }
});


// Range Overflow
const overflowButton = document.getElementById('rangeOverflow');
const input_overflow = document.getElementById('input-Overflow');

overflowButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (input_overflow.validity.rangeOverflow) {
    console.log('Valor rechazado: fuera del rango permitido');
  } else {
    console.log('Valor aceptado: dentro del rango permitido');
  }
});


// Range Underflow
const underflowButton = document.getElementById('rangeUnderflow');
const input_underflow = document.getElementById('input-Underflow');

underflowButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (input_underflow.validity.rangeUnderflow) {
    console.log('Valor rechazado: fuera del rango permitido');
  } else {
    console.log('Valor aceptado: dentro del rango permitido');
  }
});