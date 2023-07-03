// El objeto window consta de 3 elementos:
// El DOM, el BOM y Javascript(Objetos, arrays, funciones, etc)

// Por tanto, esto
document.getElementById('someId');
// es lo mismo que esto,
window.document.getElementById('someId');





// ANCHO Y ALTO DE LA VENTANA DEL NAVEGADOR

// innerWidth, innerHeight, outerWidth, outerHeight
// Estas medidas pueden variar según el % de zoom
const currentWidth = document.getElementById('showWidth');
currentWidth.addEventListener('click', () => {
  console.log(window.innerWidth);
});

const currentHeight = document.getElementById('showHeight');
currentHeight.addEventListener('click', () => {
  console.log(window.innerHeight);
});

const fullWidth = document.getElementById('showFullWidth');
fullWidth.addEventListener('click', () => {
  console.log(window.outerWidth);
});

const fullHeight = document.getElementById('showFullHeight');
fullHeight.addEventListener('click', () => {
  console.log(window.outerHeight);
});






// OTROS MÉTODOS ÚTILES

// window.open()
// Recibe 2 parámetros, el 1° es la URL que abrirá, y el 2° es el tipo de target
const openNewWindow = document.getElementById('openNewWindow');
openNewWindow.addEventListener('click', () => {
  window.open('https://www.w3schools.com/js/js_window.asp', '_blank');
});

// window.close()
// No recibe parámetros, cierra la ventana actual
const closeThisWindow = document.getElementById('closeThisWindow');
closeThisWindow.addEventListener('click', () => {
  window.close();
});

// window.moveTo() y moveBy()
// Recibe 2 parámetros, las posiciones "x" y "y" del navegador, en pixeles
// moveTo() mueve la ventana en base a la posición absoluta
// moveBy() mueve la ventana en base a la posición relativa
// Están sujeto a ciertas restricciones por razones de seguridad
const moveToAny = document.getElementById('moveTo');
moveToAny.addEventListener('click', () => {
  window.moveTo(0, 2000);
  // window.moveBy(0, 2500);
});

// window.resizeTo()
// Parámetros => posiciones "x" y "y" del navegador al cual cambiará
// Al igual que moveTo() y moveBy(), está sujeto a ciertas restricciones por razones de seguridad
const resizeTo = document.getElementById('resizeTo');
resizeTo.addEventListener('click', () => {
  window.resizeTo(800, 600);
});










// ACCEDIENDO A LA VENTANA DEL NAVEGADOR

// [ Window.screen ]
// Puede variar dependiendo del % de zoom del navegador

// Para ejemplificar estos 4 propiedades, supongamos que las dimensiones de mi pantalla son:
// ancho: 1366px, alto: 768px
// Mi barra de tareas se encuentra en la parte inferior, tiene un alto de 40px
// En las partes laterales no tengo nada que lo ocupe, por tanto, ancho ocupado: 0px

// Obtener el ancho total de pantalla
const getScreenWidth = document.getElementById('getScreenWidth');
getScreenWidth.addEventListener('click', () => {
  // console.log(window.screen.width);
  // window.screen.width ==== screen.width
  console.log(screen.width); // Output: 1366px
});

// Obtener el alto total de pantalla
const getScreenHeight = document.getElementById('getScreenHeight');
getScreenHeight.addEventListener('click', () => {
  // console.log(window.screen.width);
  // window.screen.width ==== screen.width
  console.log(screen.height); // Output: 768px
});

// Obtener al ancho disponible de la pantalla
const getAvailScreenWidth = document.getElementById('getAvailScreenWidth');
getAvailScreenWidth.addEventListener('click', () => {
  console.log(screen.availWidth);
  // ancho total - (nada en mi caso, 0px) = 1366px
});

// Obtener al alto disponible de la pantalla
const getAvailScreenHeight = document.getElementById('getAvailScreenHeight');
getAvailScreenHeight.addEventListener('click', () => {
  console.log(screen.availHeight);
  // alto total - barra de tareas = 728px
});

// Obtener la profundidad de color
// screen.colorDepth => retorna el número de bits utilizados para mostrar un color
// 24 bits = 16,777,216 "Colores verdaderos" diferentes
// 32 bits = 4.294.967.296 "Colores profundos" diferentes
const getColorDepth = document.getElementById('getColorDepth');
getColorDepth.addEventListener('click', () => {
  console.log(screen.colorDepth);
});

// Obtener la profundidad de pixeles
// Para las computadoras modernas, la profundidad de color y la profundidad de píxeles son iguales.
const getPixelDepth = document.getElementById('getPixelDepth');
getPixelDepth.addEventListener('click', () => {
  console.log(screen.pixelDepth);
});

// Obtener la información completa de la pantalla del usuario
const getWindowScreen = document.getElementById('getWindowScreen');
getWindowScreen.addEventListener('click', () => {
  // Retorna un objeto con las propiedades de la pantalla
  console.log(window.screen);
});










// LOCALIZACIÓN DE LA VENTANA DEL NAVEGADOR

// [ Window.location ]

// Obtener la URL de la página actual
const getCurrentUrl = document.getElementById('getCurrentUrl');
getCurrentUrl.addEventListener('click', () => {
  // console.log(window.location.href);
  // window.location.href = location.href
  console.log(location.href);
});

// Obtener el nombre de host de Internet de la página actual
const getHostname = document.getElementById('getHostname');
getHostname.addEventListener('click', () => {
  console.log(location.hostname);
});

// Obtener el nombre de la ruta de la página actual
const getPathname = document.getElementById('getPathname');
getPathname.addEventListener('click', () => {
  console.log(location.pathname);
});

// Obtener el protocolo web de la página actual
const getProtocol = document.getElementById('getProtocol');
getProtocol.addEventListener('click', () => {
  console.log(location.protocol);
});

// Obtener el número de puerto de host de Internet
const getPort = document.getElementById('getPort');
getPort.addEventListener('click', () => {
  console.log(location.port);
  // La mayoría de los navegadores no mostrarán los números de puerto predeterminados (80 para http y 443 para https)
});

// Cargar un nuevo documento
const loadNewDocument = document.getElementById('loadNewDocument');
loadNewDocument.addEventListener('click', () => {
  location.assign("https://www.w3schools.com");
  // o window.location.assign(), es lo mismo
});

// Obtener la información completa de la locación
const getFullLocation = document.getElementById('getFullLocation');
getFullLocation.addEventListener('click', () => {
  console.log(window.location);
});









// HISTORIAL DEL NAVEGADOR

// [ Window.history ]

// Ir hacia la página anterior
const goToPreviousURL = document.getElementById('goToPreviousURL');
goToPreviousURL.addEventListener('click', () => {
  // window.history.back();
  // window.history.back() == history.back()
  history.back();
  // En caso de no haber página de retorno, devolverá undefined
});

// Ir hacia la página posterior
const goToNextURL = document.getElementById('goToNextURL');
goToNextURL.addEventListener('click', () => {
  history.forward();
});

// Obtener el historial completo en un objeto
const getFullHistory = document.getElementById('getFullHistory');
getFullHistory.addEventListener('click', () => {
  console.log(window.history);
});









// INFORMACIÓN SOBRE EL BROWSER UTILIZADO
// [ Window.navigator ]

// Saber si las cookies están habilitadas o no
const getCookieEnabled = document.getElementById('getCookieEnabled');
getCookieEnabled.addEventListener('click', () => {
  // console.log(window.navigator.cookieEnabled);
  // window.navigator.cookieEnabled = navigator.cookieEnabled
  console.log(navigator.cookieEnabled);
});

// Obtener el encabezado del agente de usuario enviado por el navegador al servidor
const getUserAgent = document.getElementById('getUserAgent');
getUserAgent.addEventListener('click', () => {
  console.log(navigator.userAgent);
});

// Obtener el lenguage del browser
const getLanguage = document.getElementById('getLanguage');
getLanguage.addEventListener('click', () => {
  console.log(navigator.language);
});

// Saber si el navegador está en línea o no
const getIsOnline = document.getElementById('getIsOnline');
getIsOnline.addEventListener('click', () => {
  console.log(navigator.onLine);
});

// Obtener información completa del browser en un objeto
const getFullNavigation = document.getElementById('getFullNavigation');
getFullNavigation.addEventListener('click', () => {
  console.log(window.navigator);
});








// CUADROS O VENTANAS EMERGENTES DEL BROWSER
// JavaScript tiene tres tipos de cuadros emergentes: cuadro de alerta, cuadro de confirmación y cuadro de solicitud.

// Generar un cuadro de alerta
const getAlert = document.getElementById('getAlert');
getAlert.addEventListener('click', () => {
  // window.alert('Some string');
  // window.alert() = alert()
  alert(123456);
  // Cualquier tipo de dato será convertido a string, excepto los objetos
  // alert({title: 'Some string'}) ==> [object Object]
});

// Generar un cuadro de confirmación
const getConfirm = document.getElementById('getConfirm');
getConfirm.addEventListener('click', () => {
  confirm('Some text');
});

// Generar un cuadro de solicitud
const getPrompt = document.getElementById('getPrompt');
getPrompt.addEventListener('click', () => {
  const firstName = prompt('Ingrese su nombre');
  // El prompt() es un input cuyo valor puede ser capturado y ser usado.
  alert(`Bievenido(a) \n${firstName}`);
  // \n <== es un tipo de bandera que permite saltos de línea
  // hay muchos tipos de bandera como: \r, \t, etc
});









// EVENTOS DE TEMPORIZACIÓN DE JAVASCRIPT

// setTimeout() y clearTimeout()
const trySetTimeOut = document.getElementById('trySetTimeout');
let timeOutId;
trySetTimeOut.addEventListener('click', () => {
  const time = document.getElementById('time');
  time.innerHTML = 'Cargando la fecha...';

  const tryClearTimeout = document.createElement('button');
  tryClearTimeout.id = 'tryClearTimeout';
  tryClearTimeout.textContent = 'Try clearTimeout'

  time.appendChild(tryClearTimeout);

  // Establece una ejecución en un tiempo dado
  const timeOutId = setTimeout(() => {
    const date = new Date();
    time.innerHTML = date;
  }, 5000);

  tryClearTimeout.addEventListener('click', () => {
    // Para la ejecución de setTimeout
    clearTimeout(timeOutId);
    time.innerHTML = 'Ejecución cancelada por clearTimeout() ⚠';
  });
});

// setInterval() y clearInterval()
const trySetInterval = document.getElementById('trySetInterval');
let timeIntervalId;

trySetInterval.addEventListener('click', () => {
  const time = document.getElementById('time');
  time.innerHTML = 'Hora actualizada cada segundo con setInterval()';
  const p = document.createElement('p');
  time.appendChild(p);
  const button = document.createElement('button');
  button.textContent = 'Try clearInterval()';
  time.appendChild(button);

  // Ejecutar un fragmento de código con un intervalo de tiempo determinado
  timeIntervalId = setInterval(() => {
    const date = new Date();
    const currentTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    p.innerHTML = currentTime;
  }, 1000);

  // Detener la ejecución de la función ejecutora del intervalo
  button.addEventListener('click', () => {
    clearInterval(timeIntervalId);
    time.innerHTML = 'Ejecución detenida por clearInterval() ⚠';
  });
});










// COOKIES

// Las cookies le permiten almacenar información del usuario en las páginas web.
// Las cookies se guardan en pares de nombre-valor como: username = John Doe

// Crear una Cookie
// JavaScript puede crear, leer y eliminar cookies con la propiedad document.cookie.
// [ window.document.cookie = document.cookie ]
document.cookie = 'username=Mike Vivanco';

// Cambiar una Cookie
document.cookie = 'username=Sarah Milner';

// Eliminar una Cookie
// Solo necesita colocar una fecha pasada y la ruta correcta.
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/12-BROWSER-BOM;";

// Leer las Cookies
// console.log(document.cookie);

// Una función para crear unar Cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Una función para obtener una Cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Una función para verificar una Cookie
function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}