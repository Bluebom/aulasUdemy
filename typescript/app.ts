// let nome:string;
// let sobrenome:string;
// let idade:number;
// nome = 'Franklin';
// sobrenome = 'Henrique';
// idade = 22;
// console.log(`nome: ${nome} ${sobrenome}, idade: ${idade}`)
import calc from './calc.js';
console.log(calc.soma(1,2));
console.log(calc.sub(2,1));

type TipoArray = (number | string)[];
let a:TipoArray = [];
let b:TipoArray = [1,2,3,'Treinaweb'];
a.push(5);
a.push('Franklin');
console.log(a,b);
type Animal = {
    nome:string;
    idade?:number;
}
let cachorro:Animal = {
    nome: 'Tigra',
    idade: 12,
};

let calopsita:Animal = {
    nome: 'Sol',
};


console.log(cachorro,calopsita);

enum produtoStatus {
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
};

function checarProdStatus(status:number){
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

interface IAnimal{
    nome:string;
    idade:number;
    estaVivo:boolean;

    nascer():void;
    crescer():void;
    morrer():void;
}

let periquito: IAnimal = {
    nome: 'Aurora',
    idade: 2,
    estaVivo: true,
    nascer(){
        this.estaVivo  = true;
        return console.log(`${this.nome} nasceu!`);
    },
    crescer(){
        this.idade++;
        return console.log(`${this.nome} está mais velho!`);
    },
    morrer(){
        this.estaVivo = false;
        return console.log(`${this.nome} morreu!`);
    }
}

class Bicho implements IAnimal {
    nome:string;
    idade:number;
    estaVivo:boolean;

    constructor(nome:string, idade:number, estavivo:boolean){
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estavivo;
    }

    nascer(){
        this.estaVivo  = true;
        return console.log(`${this.nome} nasceu!`);
    };
    crescer(){
        this.idade++;
        return console.log(`${this.nome} está mais velho!`);
    };
    morrer(){
        this.estaVivo = false;
        return console.log(`${this.nome} morreu!`);
    };
}

let gato = new Bicho('Rengar', 18, true);

