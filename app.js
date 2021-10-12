const display=document.querySelector(".display"); //con esto enlazo el html con la js

const getPokemon= async () => {
    const getPokemonFetch = []
    for (let i = 1; i < 151; i++) {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonData = await result.json(); // esto lo pongo para que lo lea json
        getPokemonFetch.push(pokemonData);
    }

    //Hacer un mapeo del PokemonFetch//

const goToMapPokemon = getPokemonFetch.map((element) => ({
        id: element.id,
        name: element.name,
        image: element.sprites.other["official-artwork"]["front_default"],
        weight: element.weight,
        height: element.height,
      }));

      insidePokemon(goToMapPokemon)
}

const insidePokemon = (resultPokemonMap) => {
    const htmlPokemon = resultPokemonMap.map (
        (pokemon) =>
        `<li class="display__element">
          <h2>${pokemon.name}</h2>
          <img class="pokemonimage" src="${pokemon.image}" alt="${pokemon.name}"/>
          <p>NÚMERO #${pokemon.id}</p>
          <p>PESO: ${pokemon.weight/10} KG </p>
          <p>ALTURA: ${pokemon.height/10} M </p>
          </li>`
      ).join("");
    display.innerHTML = htmlPokemon;
};

getPokemon()



