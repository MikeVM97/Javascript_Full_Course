// Las promesas en JavaScript son objetos que representan un valor futuro o el resultado eventual de una operación asincrónica.
// Proporcionan una forma más elegante y estructurada de manejar tareas asíncronas en comparación con los callbacks.

// 1. Crear una promesa básica:
const miPromesa = new Promise((resolve, reject) => {
  // Realizar una operación asíncrona
  setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve('Operación exitosa'); // Resuelve la promesa
    } else {
      reject('Error en la operación'); // Rechaza la promesa
    }
  }, 2000);
});

miPromesa
  .then(resultado => {
    console.log(resultado); // Se ejecuta si la promesa se resuelve correctamente
  })
  .catch(error => {
    console.error(error); // Se ejecuta si la promesa es rechazada
  });



// 2. Encadenamiento de promesas:
function obtenerDatosDeUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = {
        id: id,
        nombre: 'John',
        edad: 30
      };
      resolve(usuario);
    }, 2000);
  });
}

function obtenerHistorialDeCompras(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const historial = ['Producto A', 'Producto B', 'Producto C'];
      resolve(historial);
    }, 1500);
  });
}

obtenerDatosDeUsuario(1)
  .then(usuario => {
    console.log(usuario); // Datos del usuario
    return obtenerHistorialDeCompras(usuario);
  })
  .then(historial => {
    console.log(historial); // Historial de compras del usuario
  })
  .catch(error => {
    console.error(error); // Manejo de errores
  });



// 3. Uso de Promise.all:
const promesa1 = Promise.resolve('Primera promesa');
const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Segunda promesa');
  }, 2000);
});

Promise.all([promesa1, promesa2])
  .then(resultados => {
    console.log(resultados); // ['Primera promesa', 'Segunda promesa']
  })
  .catch(error => {
    console.error(error);
  });

