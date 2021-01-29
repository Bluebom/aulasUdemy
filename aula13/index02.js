const numeros = [5, 50, 80, 1, 2, 3, 4, 7, 15, 22, 27, 11, 30];
const numerosFiltrados = numeros.filter(valor => valor > 30);

console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Franklin', idade: 21 },
    { nome: 'Rosana', idade: 40 }
];

const pessoasFiltradas = pessoas.filter(valor => {
    // return valor.nome.length >= 5;
    // return valor.idade > 50;
    return valor.nome.toLowerCase().endsWith('a');
});

console.log(pessoasFiltradas)
