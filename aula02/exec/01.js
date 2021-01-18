const myName = 'Franklin';
const mySurname = 'Henrique';
const today = new Date();
const year = today.getFullYear();
const birth = 1999;
let myWeight = 95;
const myHeight = 1.82;
let myAge = year - birth;
let myIMC = myWeight / (myHeight**2);
console.log(`${myName} ${mySurname} tem ${myAge} anos, pesa ${myWeight} kg`);
console.log(`mede ${myHeight} metros de altura e seu IMC é de ${myIMC.toFixed(2)}`);
console.log(`e nasceu em ${birth}`)