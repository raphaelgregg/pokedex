import {updateStorage} from '../database/StoragedPokemons';
import {html} from '../utils/getElements';

function createHeader () {
  return (`
      <h1 >Pokedex</h1>
      <a id="storageSynchronizeButton" class="icon-button">Sincronizar Storage</a>
    `)
}

export default function renderHeader(element) {
   const header = createHeader();
   element.innerHTML = header;

  handleUpdateStorage()  
};

 function handleUpdateStorage() {
  const storageSynchronizeButton = html.get('#storageSynchronizeButton')
  console.log('clikei handleUpdateStorage');
   storageSynchronizeButton.onclick = async () => await updateStorage();
  // await updat;eStorage();
}
