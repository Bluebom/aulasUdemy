class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
    
    falar() {
        console.log(`${this.nome} está falando`)
    };

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    beber() {
        console.log(`${this.nome} está bebendo`)
    }
};

const p1 = new Pessoa('Franklin', 'Henrique');
console.log(p1);
const p2 = new Pessoa('Carlos', 'Henrique');
console.log(p2);
const p3 = new Pessoa('joão', 'Henrique');
console.log(p3);
const p4 = new Pessoa('Pedro', 'Henrique');
console.log(p4);