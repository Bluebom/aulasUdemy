function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(valor) {
    this.preco = this.preco - (this.preco * (valor / 100));
};
Produto.prototype.aumento = function(valor) {
    this.preco = this.preco + (this.preco * (valor / 100));
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
// Camiseta.prototype.aumento = function(valor) {
//     this.preco += valor
// }

function Caneca(nome, preco, material, cor, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    this.cor = cor;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}; 

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 13,'Porcelana', 'Branca', 4);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
caneca.estoque = 100

console.log(Produto);
console.log(camiseta);
console.log(caneca.estoque);
