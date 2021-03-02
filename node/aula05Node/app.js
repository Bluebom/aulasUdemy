const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')
const escreve = require('./modules/write')
const ler = require('./modules/read')


// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'José'},
//     {nome: 'Marina'},
//     {nome: 'Josias'},
//     {nome: 'Mariana'},
//     {nome: 'Júlio'}
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json)
async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
};

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(element => {
        console.log(element.nome)       
    });
};

lerArquivo(caminhoArquivo)
