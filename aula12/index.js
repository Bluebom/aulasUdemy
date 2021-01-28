// IIFE -> immediately invoked function expression
(function(){
    const nome = 'Luiz';
    console.log(nome);
})();
// Dessa forma eu protejo a minha função do escopo global


const nome = 'qualquer coisa';
console.log(nome);