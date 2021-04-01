import Router from './Router';

import renderPokeSchedule from '../pages/PokeSchedule';
import renderPokeDetail from '../pages/PokeDetail';

const router = new Router({
  mode: 'hash',
  root: '/',
});

export default function Routes(element) {  
  router
    .add(/detail\/(.*)/, (id) => {
      renderPokeDetail(element)

    })
    .add('', () => {
      // general controller
      renderPokeSchedule(element);
    });

  // .add(/about/, () => {
  //   alert('welcome in about page');
  // })
  // .add(/detail\/(.*)\/specification\/(.*)/, (id, specification) => {
  //   alert(`products: ${id} specification: ${specification}`);
  // });  
  return router;
}