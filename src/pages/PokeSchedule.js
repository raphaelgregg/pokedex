import {PokeList} from '../components/PokeList';
import {Pagination} from '../components/Pagination';

function PokeSchedule(){
  const PokeSchedule = document.createElement('div');

  PokeSchedule.classList.add('poke-schedule');

  PokeSchedule.append(Pagination());
  PokeSchedule.append(PokeList()); 
 
  return PokeSchedule;
}

export {PokeSchedule};