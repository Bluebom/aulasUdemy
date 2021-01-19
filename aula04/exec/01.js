const arr = []
let form = document.querySelector('.wrap')
let cont = 0
document.querySelector('#btn').addEventListener('click', (evento) => {
    evento.preventDefault();
    let nome = `${form.querySelector('.nome').value} ${form.querySelector('.sobrenome').value}`
    let peso = form.querySelector('.peso').value
    let altura = form.querySelector('.altura').value
    arr.push({
        nome: nome,
        peso: peso,
        altura: altura
    })
    console.log(arr)
    document.querySelector('.result').innerHTML += `<p>${arr[cont].nome}, ${arr[cont].peso}, ${arr[cont].altura}</p>`;
    cont++
})
