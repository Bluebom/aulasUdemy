// // const mod1 = require('./mode1')
// const { nome, sobrenome, falaNome} = require('./mode1');

// console.log(mod1.falaNome());

const { Pessoa } = require('./mode1');
const p1 = new Pessoa('Luiz')
console.log(p1.nome)