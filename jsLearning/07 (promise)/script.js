let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(500);
    })
}, 1000),
i;

myPromise.then(value => {
    console.log(`My value is ${value}`)
    return 750;
}).then(value => {
    console.log(`My value is ${value}`)
    return 750;
})