const nome = prompt('Digite seu nome completo: ');
document.body.innerHTML += `<p class='nome'>O seu nome é ${nome}</p>`
document.body.innerHTML += `<p class='nome'>O seu nome tem ${nome.length} letras</p>`
document.body.innerHTML += `<p class='nome'>A segunda letra do seu nome é: ${nome.charAt(1)}</p>`
document.body.innerHTML += `<p class='nome'>Qual o primeiro índice da letra "a" no seu nome? ${nome.indexOf('a')}</p>`
document.body.innerHTML += `<p class='nome'>Qual o último índice da letra "a" no seu nome? ${nome.lastIndexOf('a')}</p>`
document.body.innerHTML += `<p class='nome'>As últimas 3 letras do seu nome são: ${nome.slice(-3)}</p>`
document.body.innerHTML += `<p class='nome'>As palavras do seu nome são: ${nome.split('')}</p>`
document.body.innerHTML += `<p class='nome'>Seu nome com letras maiúsculas ${nome.toUpperCase()}</p>`
document.body.innerHTML += `<p class='nome'>Seu nome com letras minúsculas: ${nome.toLowerCase()}</p>` 