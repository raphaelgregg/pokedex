import capitalizeFirstLetter from '../utils/capitalizedFirstLetter';

function createCard (data){  
  return (`
    <a class="card" href="/#/detail/${data.id}">
      <div class="poke-info">
        <h4>${capitalizeFirstLetter(data.name)}</h4>
      </div>
      <div class="poke-image">
        <img src="${data.frontImg}" alt="${data.name}">
      </div>
    </a>
  `);
}

export default function renderCard(data, element){
  let cards = "";
  for(let item of data){
    const card = createCard(item);
    cards += card;
  }
  // console.log(cards);
  element.innerHTML = cards;
}



