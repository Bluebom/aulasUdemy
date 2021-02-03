// Map
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 13, 15, 11, 22, 27];
const numerosDuasCasas = numeros.map((v) => {
    return v < 10 ? `0${v}` : v;
} )

console.log(numerosDuasCasas);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Franklin', idade: 21 },
    { nome: 'Bruna', idade: 21},
    { nome: 'Taís', idade: 28},
    { nome: 'Rosana', idade: 40 }
];

// const mapearNomePessoas = pessoas.map(obj => ({ idade: obj.idade}));
// delete obj.nome;
// return obj
const mapearNomePessoas = pessoas.map((obj, i) => {
        // obj.id = i;
        // return obj
        const newObj = { ...obj };
        newObj.id = i;
        return newObj;
});


console.log(mapearNomePessoas);
