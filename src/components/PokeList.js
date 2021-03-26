import Card from './Card';
import {pokeStoraged} from '../database/StoragedPokemons';
// import {fetchPokeAPI, fetchPokemon} from '../service/api';

function PokeList (){
  const PokeList = document.createElement('div');

  JSON.parse(localStorage.getItem('@Pokemons'));
  
  // pokeStoraged.map(item => {
  //   console.log(item); 
  // })

  for(let pokemon of pokeStoraged){
    const {name, pokemonFrontImgUrl} = pokemon;
    PokeList.append(Card(name, pokemonFrontImgUrl));
  }

  PokeList.classList.add('poke-list');

  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());
  // PokeList.append(Card());


  // PokeList.querySelector('a').onclick = function() {
  //   const name = document.querySelector(('a .poke-info h4')).textContent
  //   console.log(name);

  //   let name2 = "click"

  //   JSON.parse(localStorage.getItem('@Pokemons'))
  // }

  return PokeList;
}

export  {PokeList};