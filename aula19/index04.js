class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instância
    
    aumentarVolume() {
        this.volume += 2;

    }
    // Método de instância

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocarPilha() {
        console.log('Ok, vou trocar a pliha.');
    }

}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

ControleRemoto.trocarPilha();
console.log(controle1)