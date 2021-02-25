import GeraCPF from './modules/geraCPF'
import './assets/css/style.css';

function gerar(){
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf_gerado')
    cpfGerado.innerHTML = gera.geraNovoCpf();
};

document.addEventListener('click', e => {
    const el =  e.target;
    console.log(el)
    if(el.classList.contains('btn')){
        gerar()      
    }
})