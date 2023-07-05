// JSON es un formato de datos liviano y fácil de leer y escribir utilizado para intercambiar datos entre un servidor y un cliente, o entre diferentes sistemas. En JavaScript, JSON se utiliza ampliamente para almacenar y transportar datos estructurados.

// La sintaxis básica de JSON consiste en pares de clave-valor. Los datos se representan como objetos (encerrados entre llaves {}), y cada par clave-valor se separa por comas. Las claves deben estar entre comillas dobles, mientras que los valores pueden ser de diferentes tipos de datos, como cadenas, números, booleanos, objetos, arreglos o null.

// Ejemplo de Sintaxis

const student = {
  "name": "Alice",
  "age": 20,
  "courses": ["Math", "Science"],
  "address": {
    "street": "123 Main St",
    "city": "Los Angeles"
  },
  "isOnline": false,
};

// console.log(student);




// EJEMPLO REAL SIMULANDO EL CONSUMO DE UNA API
const users = document.getElementById("users");

async function getUsers() {
  try {
    const response = await fetch('./Example.json');
    const data = await response.json();

    console.log(data);

    data.users.forEach(user => {
      const li = document.createElement('li');
      const username = document.createTextNode(user.name);
      li.appendChild(username);
      users.appendChild(li);
    });

  } catch (error) {
    console.log(error.message);
  }
}

getUsers();



// MÉTODOS

// JSON.parse()
// Convierte un objeto JSON a un objeto Javascript
const usersStorage = localStorage.getItem('users');
const users2 = JSON.parse(usersStorage);
console.log(users2);
// Esto se puede usar para recuperar objetos almacenados en localStorage


// JSON.stringify()
// Convierte un objeto Javascript a string(JSON)
console.log(JSON.stringify(student));
// Esto se puede usar para almacenar objetos en el localStorage