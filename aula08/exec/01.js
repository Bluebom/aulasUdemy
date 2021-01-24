// function higherValue(v00, v01) {
//     let higher = v00;
//     let lower = v01;
//     if (v00 < v01) {
//         higher = v01;
//         lower = v00;
//     };
//     return console.log(`O maior valor é ${higher}\nO menor valor é ${lower}`)
// };

// higherValue(30, 40);

const max2 = (x, y) => x > y ? x : y;
console.log(max2(120, 121.01));
