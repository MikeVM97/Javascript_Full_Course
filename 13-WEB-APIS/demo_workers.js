/* let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",1000);
}

timedCount();  */



function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

self.onmessage = function(event) {
  var number = event.data;
  var result = calculateFactorial(number);
  self.postMessage(result);
};


// PARA USAR UN EJEMPLO, COMENTAR EL QUE NO SE USE