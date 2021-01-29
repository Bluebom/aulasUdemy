function Calc() {
    this.display = document.querySelector('.display')

    this.pressEnter = () => {
        this.display.addEventListener('keyup', e => {if(e.keyCode == 13) this.resulOfNumDisplay();})
    }

    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element);
            if (element.classList.contains('btn-del')) this.removeNumDisplay();
            if (element.classList.contains('btn-eq')) this.resulOfNumDisplay();
            if (element.classList.contains('btn-clear')) this.clearNumDisplay();
        })
    };

    this.addNumDisplay = valor => {
        this.display.value += valor.innerText;
        this.display.focus();
    }; 

    this.removeNumDisplay = () => this.display.value = this.display.value.slice(0, -1);

    this.resulOfNumDisplay = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta inválida.');
                return;
            };

            this.display.value = String(conta);
        } catch(e) {
            alert('Conta inválida.');
            return;
        };
    }; 

    this.clearNumDisplay = () => this.display.value = ''

    this.inicia = () => {
        this.capturaCliques();
        this.pressEnter();
    }


};



const calculadora = new Calc();
calculadora.inicia();