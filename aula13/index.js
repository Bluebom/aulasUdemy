// Função recursiva

// function recursiva(max) {
//     console.log(max);
//     max++;
//     if (max > 10) return;
//     recursiva(max);
// }

// recursiva(0);

// função geradora

function* geradora1() {
    // Código qualquer ...
    yield 'valor 1';
    // Código qualquer ...
    yield 'valor 2';
    // Código qualquer ...
    yield 'valor 3';

}

const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
for (valor of g1) {
    console.log(valor);
}

// gerador infinito

function* geradora2() {
    yield '################'
    
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
for (let i = 0; i <= 2; i++) {
    console.log(g2.next().value);
}

function* geradora3(){
    yield '################'
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
};

function* geradora5() {
    yield '################'
    
    yield function() {
        console.log('Vim do y1');
    };
    // ...

    yield function() {
        console.log('VIm do y2');
    };
}

const g5 = geradora5();
console.log(g5.next().value);
const func1 =  g5.next().value;
const func2 =  g5.next().value;

func1();
func2();