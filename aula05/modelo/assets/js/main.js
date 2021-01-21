// Capturar o evento de 'click'
const imc = document.querySelector('#result');
document.querySelector('.btn').addEventListener('click', (evento) => {
    evento.preventDefault();
    imc.classList.add('result')
    imc.innerHTML = '<h1>Seu IMC</h1>';
    // try
    let height = document.querySelector('#height');
    let weight = document.querySelector('#weight');
    let calc = Number(weight.value / (height.value) ** 2).toFixed(2);
    // Condições
    if (calc > 40) imc.innerHTML += `<span><h3> Seu IMC é: ${calc}</h3> <p>> Obesidade grau 3</p></span>`;
    else if (calc < 40 && calc >= 35) imc.innerHTML += `<span class='imc'><h3> Seu IMC é: ${calc}</h3> <p>> Obesidade grau 2</p></span>`;
    else if (calc < 35 && calc >= 30) imc.innerHTML += `<span class='imc'><h3> Seu IMC é: ${calc}</h3> <p>> Obesidade grau 1</p></span>`;
    else if (calc < 30 && calc >= 25) imc.innerHTML += `<span class='imc'><h3> Seu IMC é: ${calc}</h3> <p>> Sobrepeso</p></span>`;
    else if (calc < 25 && calc >= 18.5) imc.innerHTML += `<span class='imc'><h3> Seu IMC é: ${calc}</h3> <p>> Peso normal</p></span>`;
    else imc.innerHTML += `<span class='imc'><h3> Seu IMC é: ${calc}</h3> <p>> Abaixo do peso</p></span>`;
})