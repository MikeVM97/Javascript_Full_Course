// Web History API

// Ir a la página anterior
// window.history.back() = history.back();
const goBack = document.getElementById('back');
goBack.addEventListener('click', () => {
  history.back();
  // Retrocede 1 página atrás, en caso de no haber historial retorna undefined
});

// Ir a una página específica
const goSpecific = document.getElementById('go');
goSpecific.addEventListener('click', () => {
  history.go(-2);
  // Retrocede 2 páginas atrás, en caso de no haber historial retorna undefined
});

// Ir a la siguiente página
const goNext = document.getElementById('forward');
goNext.addEventListener('click', () => {
  history.forward();
  // Avanza 1 página hacia adelante, en caso no haber historial retorna undefined
});

// Obtener el objeto History {}
const obj = document.getElementById('history');
obj.addEventListener('click', () => {
  console.log(window.history);
});