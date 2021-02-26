import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha_gerada')
const qtdCaracteres = document.querySelector('.qtdCha')
const chkMaiuscula = document.querySelector('.chk_maiusculas');
const chkMinuscula = document.querySelector('.chk_minusculas');
const chkNumero = document.querySelector('.chk_numeros');
const chkSimbolo = document.querySelector('.chk_simbolos');
const btnGerar = document.querySelector('.gerar_senha')

export default () => {
    btnGerar.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
    function gera() {
        const senha = geraSenha(
            qtdCaracteres.value,
            chkMaiuscula.checked,
            chkMinuscula.checked,
            chkNumero.checked,
            chkSimbolo.checked
        )
        return senha || '*Selecione uma opção!';
    }
}
