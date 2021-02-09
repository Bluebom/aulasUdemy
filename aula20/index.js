class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: String(cpfEnviado.replace(/\D+/g, '')),
            writable: false, 
            enumerable: true,
            configurable: false,
        })    
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencial()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const dig1 = this.criaDigito(cpfParcial);
        const dig2 = this.criaDigito(cpfParcial + dig1);

        const novoCpf = cpfParcial + dig1 + dig2;
        return novoCpf === this.cpfLimpo;
    }

    isSequencial() {
        const sequency = this.cpfLimpo[0].repeat(11);
        return sequency === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regress = cpfArray.length + 1;
        const total = cpfArray.reduce((sum, num) => {
            sum += regress * Number(num);
            regress--
            return sum;
        }, 0)
        const dig = 11 - (total % 11);
        return dig > 9 ? '0' : String(dig);
    } 

}

const cpf = new ValidaCPF('111.111.111-11')
// console.log(cpf.valida())

if (cpf.valida()) {
    console.log('cpf válido')
} else {
    console.log('cpf inválido')
}