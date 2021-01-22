
// let date = new Date();
// const dateT = date.getDay();
// let weekDayText = String;
// switch (dateT) {
//     case 0:
//         weekDayText = 'domingo';
//         break;
//     case 1:
//         weekDayText = 'segunda-feira';
//         break;
//     case 2:
//         weekDayText = 'terça-feira';
//         break;
//     case 3:
//         weekDayText = 'quarta-feira';
//         break;
//     case 4:
//         weekDayText = 'quinta-feira';
//         break;
//     case 5:
//         weekDayText = 'sexta-feira';
//         break;
//     case 6:
//         weekDayText = 'sábado';
//         break;
//     default:
//         weekDayText = "This day doesn't exist"
// }

// const dateM = date.getMonth();
// let monthText = String;
// switch (dateM) {
//     case 0:
//         monthText = 'Janeiro';
//         break;
//     case 1:
//         monthText = 'Fevereiro';
//         break;
//     case 2:
//         monthText = 'Março';
//         break;
//     case 3:
//         monthText = 'Abril';
//         break;
//     case 4:
//         monthText = 'Maio';
//         break;
//     case 5:
//         monthText = 'Junho';
//         break;
//     case 6:
//         monthText = 'Julho';
//         break;
//     case 7:
//         monthText = 'Agosto';
//         break;
//     case 8:
//         monthText = 'Setembro';
//         break;
//     case 9:
//         monthText = 'Outubro';
//         break;
//     case 10:
//         monthText = 'Novembro';
//         break;
//     case 11:
//         monthText = 'Dezembro';
//         break;
//     default:
//         monthText = "This day doesn't exist"
// }

// function zeroLeft (num) {
//     return num >= 10 ? num : `0${num}`
// }

// const dateD = date.getDate();
// const dateY = date.getFullYear();
// const dateH = `${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`

// reassign.innerHTML = `${weekDayText}, ${dateD} de ${monthText} de ${dateY} <p>${dateH}</p>`;

const reassign = document.getElementById('reassign');
const data = new Date();
reassign.innerHTML = `${data.toLocaleDateString('pt-BR', {dateStyle: 'full' })} <p> ${data.getHours()}:${data.getMinutes()}</p>`;