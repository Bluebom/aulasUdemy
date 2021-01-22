// Função construtora
const data = new Date();// Ano, Mês, Dia, hora, minuto, segundo, milisegundo
console.log('DIA', data.getDate());
console.log('ANO', data.getFullYear());
console.log('MÊS', data.getMonth());
console.log('DIA SEMANA', data.getDay());
console.log('HORA', data.getHours());
console.log('MIN', data.getMinutes());
console.log('SEG', data.getSeconds());
console.log('MS', data.getMilliseconds());

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroLeft(data.getDate());
    const mês = zeroLeft(data.getMonth()+1);
    const ano = zeroLeft(data.getFullYear());
    const hora = zeroLeft(data.getHours());
    const min = zeroLeft(data.getMinutes());
    const seg = zeroLeft(data.getSeconds());

    return `\n\n${dia}/${mês}/${ano} ${hora}:${min}:${seg}`
}

console.log(formataData(data))
