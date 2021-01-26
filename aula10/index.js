// // Declaração de função (Function hoisting)
// falaOi();
// function falaOi() {
//   console.log('Oie');
// }

// // First-class objects (Objetos de primeira classe)
// // Function expression
// const souUmDado = function() {
//   console.log('Sou um dado.');
// };
// souUmDado();

// // Arrow function
// const funcaoArrow = () => {
//   console.log('Sou uma arrow function');
// };
// funcaoArrow();

// // Dentro de um objeto
// const obj = {
//   falar() {
//     console.log('Estou falando...');
//   }
// };
// obj.falar();

// Doideira do return

function falaFrase(start) {
  function falaResto(rest) {
    return start + ' ' + rest;
  }

  return falaResto;
}

const fala =  falaFrase('olá');
const resto = fala('mundo!');
console.log(resto);

// closure

function criaMultiplicador(multiplicador) {
  // multiplicador
  return function(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));