let num = window.prompt('Digite um número: ')
while(Number.isNaN(num) == true){
    window.alert('Você não colocou um número. Tente novamente!')
    num = window.prompt('Digite um número: ') 
}
num = Number(num);
window.document.querySelector('#num').innerHTML += num 
document.body.innerHTML += `<p class='nome'>A raiz quadrada de ${num} é <em>${num**0.5}</em></p>`;
document.body.innerHTML += `<p class='nome'>${num} é inteiro? <em>${Number.isInteger(num)}</em></p>`;
document.body.innerHTML += `<p class='nome'> ${num} é NaN? <em>${Number.isNaN(num)}</em></p>`;
document.body.innerHTML += `<p class='nome'>Arredondando ${num} para baixo: <em>${Math.floor(num)}</em></p>`;
document.body.innerHTML += `<p class='nome'>Arredondando ${num} para cima <em>${Math.ceil(num)}</em></p>`;
document.body.innerHTML += `<p class='nome'>${num} com duas casas decimais: <em>${num.toFixed(2)}</em></p>`;