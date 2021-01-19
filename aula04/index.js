function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luíz', 'Otávio', 37);
const pessoa2 = criaPessoa('Maria', 'Lúcia', 40);
const pessoa3 = criaPessoa('João', 'Guilherme', 30);
const pessoa4 = criaPessoa('Fred', 'Antônio', 20);
const pessoa5 = criaPessoa('Franklin', 'Henrique', 22);
const pessoa6 = criaPessoa('Bruna', 'Carla', 21);
console.log(pessoa1.sobrenome, pessoa2.sobrenome,pessoa3.sobrenome,pessoa4.sobrenome,pessoa5.sobrenome,pessoa6.sobrenome)

const pessoa7 = {
    fala(a) {
        console.log(`${a.nome} ${a.sobrenome} está falando oi... \n`,)
    }
}

pessoa7.fala(pessoa5);
pessoa7.fala(pessoa6);

const pessoa8 = {
    nome: 'Luíz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    }
}

pessoa8.fala();