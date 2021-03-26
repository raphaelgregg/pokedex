// const totalPokemon = 151;
const baseURL = `https://pokeapi.co/api/v2/pokemon`;
// const baseURL = `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}`;

async function fetchPokeAPI() {
    let response = await fetch(baseURL);
    let data = await response.json();
    const {count} = data;

    response = await fetch(baseURL+`?limit=${count}`);
    data = await response.json();

    // console.log(data);
    return data;
}

async function fetchPokemon(urlPokemon){
    const response = await fetch(urlPokemon);
    const data = await response.json();

    let name = data['name'];
    let pokemonFrontImgUrl = data['sprites']['front_default'];

    return {name,pokemonFrontImgUrl};
};

export {fetchPokeAPI, fetchPokemon};