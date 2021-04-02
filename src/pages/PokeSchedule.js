import renderHeader, {handleUpdateStorage} from '../components/Header';
import renderPagination from '../components/Pagination';
import executeActionsPaginator from '../controllers/PaginationController';

import {html} from '../utils/getElements';

function cretePokeSchedule(){
  return (`
    <div class="poke-schedule">
      <div class="header"></div>
      <div class="poke-list"></div>
      <div class="pagination"></div>
    </div> 
  `);
}

export default function renderPokeSchedule(element){
  const pokeSchedule = cretePokeSchedule(); 
  element.innerHTML = pokeSchedule;

  renderHeader(html.get('.header'));

  renderPagination(html.get('.pagination'));  

  executeActionsPaginator();
}