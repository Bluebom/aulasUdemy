// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (some tudos)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 13, 15, 11, 22, 27];

// 1º FILTER
const numerosFiltrados = numeros
    .filter(v => (v % 2 === 0))
    .map(v => (v * 2))
    .reduce((sum, num) => (sum + num), 0);
    
console.log(numerosFiltrados);

// 2º MAP
const numerosDobrados = numeros.map(v => (v * 2));

console.log(numerosDobrados);

// 3º REDUCE
const numerosSomados = numeros.reduce((sum, num) => (sum + num), 0)

console.log(numerosSomados);