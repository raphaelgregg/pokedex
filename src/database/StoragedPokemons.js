import {fetchPokeAPI, fetchPokemon} from '../service/api';

let pokeStoraged =  JSON.parse(localStorage.getItem('@Pokemons')) || [];
let pokeAPI = [];

async function StoragedPokemons(){
    try {
        const {results} = await fetchPokeAPI();

        for( let pokemon of results) {
            const description = await fetchPokemon(pokemon.url);

            let name = description.name;
            let pokemonFrontImgUrl = description.pokemonFrontImgUrl;

            pokeAPI.push({name, pokemonFrontImgUrl});
        }
    } catch (error) {
        console.log(error)       
    }
}


 function GetOrPushStorage() {
    StoragedPokemons();
     

    console.log(pokeAPI);

    if(pokeStoraged.length !== pokeAPI.length){
    console.log("Sem registro, buscar na api");
    // Mapear a PokeAPI
    pokeAPI.map(item => {
        // Verificar se obj existe no LocalStorage
        const index = pokeStoraged.indexOf(item);
        // Adicionar ao localstorage obs não encontrados;
        if(index === -1){
            pokeStoraged.push(item);
        }
    });
    // enviar novo BD pra o localStorage
    localStorage.setItem("@Pokemons", JSON.stringify(pokeStoraged));
    }else {
        console.log(pokeStoraged)
        console.log("passei na validação")
    }
}

export {GetOrPushStorage, pokeStoraged};