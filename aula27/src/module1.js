export const name = 'Luiz';
export const surname = 'Miranda';
export const age = 30;

function soma(x, y) {
    return x + y;
};

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}