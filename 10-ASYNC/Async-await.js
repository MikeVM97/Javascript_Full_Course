// Async/await es una característica de JavaScript que simplifica aún más la escritura de código asíncrono utilizando promesas.
// Proporciona una sintaxis más clara y concisa para manejar operaciones asíncronas.

// 1. Uso básico de async/await con una función asíncrona:
function obtenerDatos() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Datos obtenidos');
    }, 2000);
  });
}

async function miFuncionAsync() {
  try {
    const resultado = await obtenerDatos();
    console.log(resultado); // Datos obtenidos
  } catch (error) {
    console.error(error);
  }
}

miFuncionAsync();



// 2. Uso de async/await con Promise.all:
function getData(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Datos ${id}`);
    }, Math.random() * 2000);
  });
}

async function obtenerTodosLosDatos() {
  try {
    const promesa1 = getData(1);
    const promesa2 = getData(2);
    const promesa3 = getData(3);

    const resultados = await Promise.all([promesa1, promesa2, promesa3]);
    console.log(resultados); // [ 'Datos 1', 'Datos 2', 'Datos 3' ]
  } catch (error) {
    console.error(error);
  }
}

obtenerTodosLosDatos();



// 3. Uso de async/await en un bucle:
function obtenerDato(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Dato ${id}`);
    }, Math.random() * 2000);
  });
}

async function obtenerDatosConBucle() {
  try {
    for (let i = 1; i <= 3; i++) {
      const dato = await obtenerDato(i);
      console.log(dato); // Dato 1, Dato 2, Dato 3
    }
  } catch (error) {
    console.error(error);
  }
}

obtenerDatosConBucle();
