let varA = 'A';
let varB = 'B';
let varC = 'C';
let varD;

varD = varA;
varA = varB;
varB = varC;
varC = varD;
varD = null;

console.log(varA, varB, varC)