const container = document.querySelector('#container');

const list = document.createElement('ul');

const URL = "https://pokeapi.co/api/v2/pokemon";

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
