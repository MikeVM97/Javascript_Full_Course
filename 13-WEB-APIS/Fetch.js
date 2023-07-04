// La interfaz Fetch API permite que el navegador web realice solicitudes HTTP a los servidores web.
// 😀 Ya no es necesario XMLHttpRequest.

// fetch()
// Recibe como parámetro una URL (también url local, ejm: ./api.js)

// Ejemplo
const URL = "https://pokeapi.co/api/v2/pokemon";

fetch(URL)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

// La Fetch API devuelve una promesa que se puede encadenar utilizando los métodos .then() y .catch(). En el primer .then(), se convierte la respuesta de la solicitud en formato JSON utilizando el método .json(). Luego, en el segundo .then(), se accede a los datos obtenidos.

// Si ocurre algún error durante la solicitud, se captura en el .catch()
// El erro capturado en el catch, es un objeto que tiene varias propiedades:
// err.message, err.status, err.statusCode, err.statusMessage, etc...
// Con estas propiedades podemos manejar el error de forma personalizada.



// fetch + async-await
// Podemos envolver esta operación asíncrona en una función, para que sea invocada solo cuando se necesite.
const container = document.querySelector('#container');
const list = document.createElement('ul');

async function getPokemons(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach( async(pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      const name = data.name;
      const sourceImage = data.sprites.front_default;
      const li = document.createElement('li');
      const paragraph = document.createElement('p');
      const img = document.createElement('img');

      paragraph.innerHTML = name;
      img.src = sourceImage;
      img.width = '150';
      img.height = '150';
      li.appendChild(paragraph);
      li.appendChild(img);
      list.appendChild(li);
    });

    container.appendChild(list);
    
  } catch (error) {
    console.log(error.message);
  }
}

getPokemons(URL);
