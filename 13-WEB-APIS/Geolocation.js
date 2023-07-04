// La API de geolocalización HTML se utiliza para obtener la posición geográfica de un usuario.
// Dado que esto puede comprometer la privacidad, la posición no está disponible a menos que el usuario lo apruebe.

// La geolocalización es más precisa para dispositivos con GPS, como los teléfonos inteligentes.

// La API de geolocalización solo funcionará en contextos seguros como HTTPS.

// Si su sitio está alojado en un origen no seguro (como HTTP), las solicitudes para obtener la ubicación de los usuarios ya no funcionarán.

const getLocation = document.getElementById('current');

getLocation.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
});

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      console.log('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      console.log('The request to get user location timed out.');
      break;
    case error.UNKNOWN_ERROR:
      console.log('An unknown error occurred.');
      break;
  }
}

// El método getCurrentPosition() devuelve un objeto en caso de éxito. Las propiedades de "latitud", "longitud" y "precisión" siempre se devuelven. Las otras propiedades se devuelven si están disponibles:

// PROPIEDADES:
/* coords.latitude
coords.longitude
coords.accuracy
coords.altitude
coords.altitudeAccuracy
coords.heading
coords.speed
timestamp
*/

// OTROS MÉTODOS:

// watchPosition()
// Devuelve la posición actual del usuario y continúa devolviendo la posición actualizada a medida que el usuario se mueve (como el GPS en un automóvil).
const startWatch = document.getElementById('start');
let watchId;

startWatch.addEventListener('click', () => {
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(showPosition, showError);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
});

// clearWatch()
// Finaliza el método watchPosition()
const stopWatch = document.getElementById('stop');
stopWatch.addEventListener('click', () => {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
    console.log('Ha finalizado el seguimiento de la Geolocalización');
  }
});