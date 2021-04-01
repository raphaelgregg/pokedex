import {updateStorage} from '../database/StoragedPokemons';

 function createHeader () {
  async function handleUpdateStorage() {
    console.log('sicronize LocalStorage');
    // await updateStorage();
  }

  return (`
      <h1 >Pokedex</h1>
      <a class="icon-button" onClick="${handleUpdateStorage()}">Atualizar</a>
    `)
 }

 export default function renderHeader(element) {
   const header = createHeader();
   element.innerHTML = header;
 };