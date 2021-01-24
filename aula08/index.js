// // continue and break
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num of numeros) {
    
//     if (num === 2) {
//         console.log('Pulei o número 2')
//         continue;
//     }

//     if (num === 7) {
//         console.log('aqui está 7')
//         break;
//     }
//     console.log(num);

// }


// try{
//     // É executada quando não há erros
// } catch (error) {
//     // É executada quando há erros
// } finally {
//     // sempre
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instância de Date.');

    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
};

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    console.log(e);
} finally {
    console.log('Tenha um bom dia.');
}
