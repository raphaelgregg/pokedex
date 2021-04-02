import renderCard from '../components/Card'; 


import {StoragedPokemons} from '../database/StoragedPokemons';
import {html} from '../utils/getElements';

let perPage = 16;
  const state = {
      page: 1,
      perPage,
      totalPage: Math.ceil(StoragedPokemons.length / perPage),
      maxVisibleButtons: 5,
  }

const controls = {
  next() {
      state.page++;

      if(state.page > state.totalPage){
          state.page--;
      }
  },
  prev() {
    state.page--;

    if(state.page < 1){
        state.page++;
    } 
  },
  goTo(page) {
      if(page < 1){
          page = 1;
      }

      state.page = +page;

      if(page> state.totalPage){
          state.page = state.totalPage;
      }
  },
  createListeners() {
    html.get('.first').addEventListener('click', () => {
        controls.goTo(1)
        update();
    });

    html.get('.last').addEventListener('click', () => {
        controls.goTo(state.totalPage)
        update();
    });  
    html.get('.next').addEventListener('click', () => {
      console.log(state.page);
      controls.next();
      console.log(state.page);
        update();
    });
    html.get('.prev').addEventListener('click', () => {
        controls.prev();
        console.log(state.page)
        update();
    });
  }
}

const list = {
  create(pokemons){
    // html.get('.poke-list').append(Card(pokemons));
    // console.log(pokemons);

    renderCard(pokemons, html.get('.poke-list'));
  },
  update() {
      html.get('.poke-list').innerHTML = "";

      let page = state.page - 1;
      let start = page * state.perPage;
      let end = start + state.perPage;
      
      const paginatedItems = StoragedPokemons.slice(start, end);
      // console.log(paginatedItems);

      // paginatedItems.forEach(list.create);
      list.create(paginatedItems);
      // console.log(paginatedItems.length);
  }
}

const buttons = {
  create(number) {
      const button = document.createElement('div');
      
      button.innerHTML = number;

      if(state.page == number) {
          button.classList.add('active');
      }

      button.addEventListener('click', (event) => {
          const page = event.target.innerText;

          controls.goTo(page);
          update();
      })

      html.get('.pagination .numbers').appendChild(button);
  },
  update() {
      html.get('.pagination .numbers').innerHTML = "";
      const {maxLeft, maxRight} = buttons.calculateMaxVisible();

      for( let page = maxLeft; page <= maxRight; page++){
          buttons.create(page);
      }
  },
  calculateMaxVisible() {
      const {maxVisibleButtons} = state;
      let maxLeft = state.page - Math.floor(maxVisibleButtons / 2);
      let maxRight = state.page + Math.floor(maxVisibleButtons / 2);

      if(maxLeft < 1){
          maxLeft = 1;
          maxRight = maxVisibleButtons;
      }

      if (maxRight > state.totalPage) {
          maxLeft = state.totalPage - (maxVisibleButtons -1);
          maxRight = state.totalPage;

          if(maxLeft < 1) maxLeft =1;
      }

      return {maxLeft, maxRight}
  }
}

const update = () => {
  list.update();
  buttons.update();
}

export default function executeActionsPaginator () {
  console.log('schedule events init');
  update()
  controls.createListeners();
  // detailPokemon();
}

