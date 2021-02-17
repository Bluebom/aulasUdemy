function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string' ) reject(new Error('BADVALUE'))


        setTimeout(() => {
            resolve(msg + ' Passei na Fase!');
        }, tempo);
    });

}

// esperaAi('Fase 1', rand(0, 3))
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand(0,3))
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(valor => {
//         console.log(valor);
//     })

async function exec() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
            console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
            console.log(fase2);
        const fase3 = await esperaAi(4, rand());
            console.log(fase3);
    } catch(e) {
        console.log(e);
    };
}

exec();
