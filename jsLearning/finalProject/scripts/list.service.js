export const ListService = {
    createList(pkmList){
        return pkmList.map((pokemon) => {
            return `<li class="poke-item-list">
                        <img src="//serebii.net/pokedex-xy/icon/${pokemon.number}.png">
                        <span>${pokemon.number}</span> <span>${pokemon.name}</span>
                    </li>`
        }).join('');
    }
}
