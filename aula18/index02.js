const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`)
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
};

function criaPessoa(nome, sobrenome) {
    const peossoasPrototype = { ...falar, ...comer, ...beber}

    // {
        
    //     falar() {
    //         console.log(`${this.nome} está falando.`);
    //     },

    //     comer() {
    //         console.log(`${this.nome} está comendo.`)
    //     },

    //     beber() {
    //         console.log(`${this.nome} está bebendo.`)
    //     },
    // }
    
    return Object.create(peossoasPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

let pessoa = criaPessoa('Fernando', 'Henrique');
console.log(pessoa.beber())