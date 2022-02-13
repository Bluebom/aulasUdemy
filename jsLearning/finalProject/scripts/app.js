import { PokeService } from './poke.service';
import { ListService } from './list.service';

let listFilter = ''
const listElement = document.querySelector("#pokeList"),
      inputElement = document.querySelector("#pokeFilter"),
      pokeballElement = document.querySelector("#pokeballBack");

inputElement.addEventListener('keyup', function() {
    listFilter = this.value;
    setList();
})

window.addEventListener('scroll', function(){
    let rotation = `rotateZ(${this.scrollY / 15}deg)`;
    pokeballElement.style.transform = rotation;
})

function setList(){
    PokeService.listAll()
        .then(filterList)
        .then(ListService.createList)
        .then(template => listElement.innerHTML = template);
}

function filterList(pkmList){
    return pkmList.filter((pkm) => pkm.name.includes(listFilter.toLowerCase()))
}

setList();