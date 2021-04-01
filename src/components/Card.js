function createCard (data){  
  return (`
    <a class="card" href="/#/detail/${data.id}">
      <div class="poke-info">
        <h4>${data.name}</h4>
      </div>
      <div class="poke-image">
        <img src="${data.frontImg}" alt="${data.name}">
      </div>s
    </a>
  `);
}

export default function renderCard(data, element){
  let cards = "";
  for(let item of data){
    const card = createCard(item);
    cards += card;
  }
  element.innerHTML = cards;
}



