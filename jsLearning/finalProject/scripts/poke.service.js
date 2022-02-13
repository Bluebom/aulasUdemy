export const PokeService = {
    get url(){
        return 'https://pokeapi.co/api/v2/'
    },
    list: [],
    listAll() {
        if(this.list.length){
            return Promise.resolve(this.list);
        }else{
            return  fetch(`${this.url}pokedex/1`)
                .then(response => response.json())
                .then(result => result.pokemon_entries)
                .then(pkmList => {
                    return pkmList.map((pokemon) => {
                        pokemon.number = pokemon.entry_number;
                        pokemon.name = pokemon.pokemon_species.name;
                        return pokemon;
                    }).filter(pokemon => pokemon.number <= 100)
                    .sort((a,b) => (a.number > b.number ? 1 : -1))
                    .map((pokemon) => {
                        pokemon.number = ('000'+pokemon.number).slice(-3);
                        return pokemon;
                    })
                }).then(list => {
                    this.list = list;
                    return list;
                })
        }
    },

}