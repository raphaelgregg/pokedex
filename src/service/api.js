let baseURL = `https://pokeapi.co/api/v2/pokemon/`;
// const baseURL = `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}`;

async function api(pokemon) {
    let data="";

    if(pokemon != undefined) {
        let response = await fetch(baseURL + pokemon);
        data = await response.json();
        
    }else {
        let response = await fetch(baseURL);
        data = await response.json();

        const {count} = data;
        // const count = 47;
        const limit = `?limit=${count}`;

        response = await fetch(baseURL + `${limit}`);
        data = await response.json();
    }

    return data;
}


// async function fetchPokemon(urlPokemon){
//     const response = await fetch(urlPokemon);
//     const data = await response.json();

//     let name = data['name'];
//     let pokemonFrontImgUrl = data['sprites']['front_default'];

//     return {name,pokemonFrontImgUrl};
// };

export {api}; 