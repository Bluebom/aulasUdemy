function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string' ) reject(new Error('BADVALUE'))


        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });

}

esperaAi(7, rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da Base', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log(e);
    });
