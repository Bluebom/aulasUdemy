// let nome:string;
// let sobrenome:string;
// let idade:number;
// nome = 'Franklin';
// sobrenome = 'Henrique';
// idade = 22;
// console.log(`nome: ${nome} ${sobrenome}, idade: ${idade}`)
import calc from './calc.js';
console.log(calc.soma(1, 2));
console.log(calc.sub(2, 1));
let a = [];
let b = [1, 2, 3, 'Treinaweb'];
a.push(5);
a.push('Franklin');
console.log(a, b);
let cachorro = {
    nome: 'Tigra',
    idade: 12,
};
let calopsita = {
    nome: 'Sol',
};
console.log(cachorro, calopsita);
var produtoStatus;
(function (produtoStatus) {
    produtoStatus[produtoStatus["Ativo"] = 1] = "Ativo";
    produtoStatus[produtoStatus["Inativo"] = 2] = "Inativo";
    produtoStatus[produtoStatus["Indisponivel"] = 3] = "Indisponivel";
})(produtoStatus || (produtoStatus = {}));
;
function checarProdStatus(status) {
    switch (status) {
        case produtoStatus.Ativo:
            console.log('Produto disponível');
            break;
        case produtoStatus.Inativo:
            console.log('Produto não encontrado');
            break;
        case produtoStatus.Indisponivel:
            console.log('Produto aguardando estoque');
            break;
    }
}
checarProdStatus(1);
let periquito = {
    nome: 'Aurora',
    idade: 2,
    estaVivo: true,
    nascer() {
        this.estaVivo = true;
        return console.log(`${this.nome} nasceu!`);
    },
    crescer() {
        this.idade++;
        return console.log(`${this.nome} está mais velho!`);
    },
    morrer() {
        this.estaVivo = false;
        return console.log(`${this.nome} morreu!`);
    }
};
class Bicho {
    constructor(nome, idade, estavivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estavivo;
    }
    nascer() {
        this.estaVivo = true;
        return console.log(`${this.nome} nasceu!`);
    }
    ;
    crescer() {
        this.idade++;
        return console.log(`${this.nome} está mais velho!`);
    }
    ;
    morrer() {
        this.estaVivo = false;
        return console.log(`${this.nome} morreu!`);
    }
    ;
}
let gato = new Bicho('Rengar', 18, true);
