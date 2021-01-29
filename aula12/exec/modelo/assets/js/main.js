function Calc() {
    this.display = window.document.querySelector('.display');

    
    this.inicia = () => {
        this.cliqueBottons();
        this.pressionaEnter();

    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.equalsButton();
            }
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.equalsButton = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida')
            return;
        }
    };

    this.cliqueBottons = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            const elP = el.classList;

            if (elP.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if (elP.contains('btn-clear')) this.clearDisplay();
            if (elP.contains('btn-del')) this.deleteOne();
            if (elP.contains('btn-eq')) this.equalsButton();
        });
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }

};


const calculadora = new Calc();
calculadora.inicia();