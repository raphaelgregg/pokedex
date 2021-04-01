function createPokeDetail(data) {
  return(`
    <div class="poke-detail">
    <button class="back" onclick="javascript:history.back()">&lt;</button>
      <div class="header-detail">
        <img src="${data.frontImg}" alt="${data.name}" />     
      </div>
      <h1>${data.name}</h1>
      <h3>${data.type}</h3>
      
      <p>Estatistica Inicial</p>
      <div class="poke-stats">
        <div>
          <p>${data.stats[0].name}</p>
          <p>${data.stats[0].base_stat}</p>
          </div> 
          <div>
          <p>${data.stats[1].name}</p>
          <p>${data.stats[1].base_stat}</p>
          </div>
          <div>
          <p>${data.stats[2].name}</p>
          <p>${data.stats[2].base_stat}</p>
          </div>
          <div>
          <p>${data.stats[3].name}</p>
          <p>${data.stats[3].base_stat}</p>
          </div>
          <div>
          <p>${data.stats[4].name}</p>
          <p>${data.stats[4].base_stat}</p>
          </div>
          <div>
          <p>${data.stats[5].name}</p>
          <p>${data.stats[5].base_stat}</p>
          </div>
      </div>    
    </div>
  `)
}

export default function renderPokeDetail(element) {
  let baseURL = window.location.href;
  const id = baseURL.split('/').pop();

  const dataStoraged = JSON.parse(window.localStorage.getItem('@Pokemons'));

  let data;
  dataStoraged.map(item => {
    if (item.id == id){
      data = item;
      return item;
    }
  });

  const detail = createPokeDetail(data);
  element.innerHTML = detail;
};

// function back() {
//   const detail = document.querySelector('.poke-detail');
//   detail.style.display = 'none';

//   const schedule = document.querySelector('.poke-schedule');
//   const app = html.get('#App');
//   app.appendChild(schedule);
// }

// function PokeDetail() { 
//   const PokeDetail = document.createElement('div');

//   PokeDetail.classList.add('poke-detail')
  
//   const header = document.createElement('div');
//   PokeDetail.appendChild(header)
//   header.classList.add('header-detail');
  
//   const img = document.createElement('img')
//   header.appendChild(img);
//   img.src = StoragedPokemons[4].frontImg;
//   img.alt = StoragedPokemons[4].name;

//   const type = document.createElement('h3');
//   PokeDetail.appendChild(type);
//   type.textContent = StoragedPokemons[4].type;

//   const name =document.createElement('h1');
//   PokeDetail.appendChild(name);
//   name.textContent = StoragedPokemons[4].name;

 

//   const statsDiv = document.createElement('div');
//   statsDiv.classList.add('stats')
//   PokeDetail.appendChild(statsDiv);
//   statsDiv.textContent = "Estatísticas inicial";

//   const hp = document.createElement('div'); 
//   statsDiv.appendChild(hp);
//   const hpName = document.createElement('b');
//   hp.appendChild(hpName)
//   hpName.textContent = StoragedPokemons[4].stats[0].name;
//   const hpBase = document.createElement('p');
//   hp.appendChild(hpBase)
//   hpBase.textContent = StoragedPokemons[4].stats[0].base_stat;

//   // const attack = document.createElement('div');
//   // statsDiv.appendChild(attack);
//   // const atkName = document.createElement('b');
//   // hp.appendChild(atkName)
//   // atkName.textContent = StoragedPokemons[4].stats[1].name;
//   // const atkBase = document.createElement('p');
//   // hp.appendChild(atkBase)
//   // atkBase.textContent = StoragedPokemons[4].stats[0].base_stat;

//   // const defense = document.createElement('div'); 
//   // statsDiv.appendChild(hp);
//   // const bname = document.createElement('b');
//   // hp.appendChild(bname)
//   // bname.textContent = StoragedPokemons[4].stats[0].name;
//   // const pbase = document.createElement('p');
//   // hp.appendChild(pbase)
//   // pbase.textContent = StoragedPokemons[4].stats[0].base_stat;

//   // const specialAtk = document.createElement('div');
//   // statsDiv.appendChild(hp);
//   // const bname = document.createElement('b');
//   // hp.appendChild(bname)
//   // bname.textContent = StoragedPokemons[4].stats[0].name;
//   // const pbase = document.createElement('p');
//   // hp.appendChild(pbase)
//   // pbase.textContent = StoragedPokemons[4].stats[0].base_stat;

//   // const specialDef = document.createElement('div'); 
//   // statsDiv.appendChild(hp);
//   // const bname = document.createElement('b');
//   // hp.appendChild(bname)
//   // bname.textContent = StoragedPokemons[4].stats[0].name;
//   // const pbase = document.createElement('p');
//   // hp.appendChild(pbase)
//   // pbase.textContent = StoragedPokemons[4].stats[0].base_stat;

//   // const speed = document.createElement('div'); 
//   // statsDiv.appendChild(hp);
//   // const bname = document.createElement('b');
//   // hp.appendChild(bname)
//   // bname.textContent = StoragedPokemons[4].stats[0].name;
//   // const pbase = document.createElement('p');
//   // hp.appendChild(pbase)
//   // pbase.textContent = StoragedPokemons[4].stats[0].base_stat;


//   return PokeDetail;
// }

// export default PokeDetail;

