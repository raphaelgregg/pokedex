import {api} from '../service/api';

let StoragedPokemons =  JSON.parse(localStorage.getItem('@Pokemons')) || [];
let pokeAPI = [];

// console.log(StoragedPokemons)

async function getPokemons(){
    try {
        const {results} = await api();

        for( let pokemon of results) {
            const namePokemon = pokemon.name;
            const detailPokemon = await api(namePokemon);

            const id = (detailPokemon.id == null ? "erro! url api null" : detailPokemon.id);
            const name = detailPokemon.name == null ? "erro! url api null" : detailPokemon.name;
            const frontImg = detailPokemon.sprites.front_default == null ? "erro! url api null" : detailPokemon.sprites.front_default ;
            const type = detailPokemon.types[0].type.name == null ? "erro! url api null" : detailPokemon.types[0].type.name ;
            // const abilities = detailPokemon.abilities;
            // const moves;
            const stats = [];
            detailPokemon.stats.map(stat => {
                let name = stat.stat.name == null ? "erro! url api null" : stat.stat.name;
                let base_stat = stat.base_stat == null ? "erro! url api null" : stat.base_stat;
                stats.push({name, base_stat})
            })
 
            pokeAPI.push({id, name, frontImg, type, stats});
        }
    } catch (error) {
        console.log(error)       
    }
}

async function updateStorage() {
    await getPokemons();

    // if(StoragedPokemons.length !== pokeAPI.length || StoragedPokemons.length === 0){
    console.log("localStorage Update, get api data.");
    StoragedPokemons = [];
    // Mapear a PokeAPI
    pokeAPI.map(item => {
    // Verificar se o obj existe no LocalStorage
    const index = StoragedPokemons.indexOf(item);
    console.log(index);
    // Adicionar ao localstorage obs não encontrados;
    if(index === -1){
        StoragedPokemons.push(item);
        // enviar novo BD pra o localStorage
    }
    });
    
    localStorage.setItem("@Pokemons", JSON.stringify(StoragedPokemons));
    document.addEventListener(alert('LocalStorage atualizado com suceso!'))
    // }else {
    // console.log(StoragedPokemons)
    // console.log("updated localStorage.")
    // }
}

console.log(StoragedPokemons)

export {updateStorage, StoragedPokemons};