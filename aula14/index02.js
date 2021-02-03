// reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 13, 15, 11, 22, 27];

const tot = numeros.reduce((sum, num) => (sum + num), 0)
console.log(tot)


const pessoas = [
    { nome: 'Luiz', idade: 620 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 550 },
    { nome: 'Franklin', idade: 21 },
    { nome: 'Bruna', idade: 21},
    { nome: 'Taís', idade: 28},
    { nome: 'Rosana', idade: 70 }
];

const maisVelha = pessoas.reduce((sum, num) => {
    if (sum.idade > num.idade) return sum
    else return num
});

console.log(maisVelha)