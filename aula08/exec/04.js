function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: 12
    });
}

const timer = setInterval(() => console.log(mostraHora()), 1000);

setTimeout(() => clearInterval(timer), 3000);

setTimeout(() => console.log('Olá Mundo!'), 5000)