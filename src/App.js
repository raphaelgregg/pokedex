import './styles/global.scss';
import {PokeSchedule} from './pages/PokeSchedule';
import {GetOrPushStorage} from './database/StoragedPokemons';
import "@babel/polyfill";

function App(){
  const App = document.createElement("div");
  const GetButtonPokemons = document.createElement('button');


  App.setAttribute('class', "App");
  GetButtonPokemons.setAttribute('class', 'button');
  GetButtonPokemons.innerHTML = 'Buscar Pokemons';
  GetButtonPokemons.onclick = () => GetOrPushStorage();

  App.append(PokeSchedule());
  App.append(GetButtonPokemons)
  // console.log(StoragedPokemons());


  return App;
}

export default App;