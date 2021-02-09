class ValidaFormulario {
    constructor( ) {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }
    
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.validFields();    
        const senhasValidas = this.validPassw();

        if(camposValidos && senhasValidas) alert('Formulário enviado com sucesso!')
    }

    validPassw() {
        let valid = true;

        const senha = this.formulario.querySelector('.password');
        const reSenha = this.formulario.querySelector('.re-password');

        if(senha.value !== reSenha.value) {
            this.criaErr(senha, 'Campos "senha" e "repetir senha" precisam ser iguais.');
            this.criaErr(reSenha, 'Campos "senha" e "repetir senha" precisam ser iguais.');
            valid = false;

        }
        return valid;

        
    }

    validFields() {
        let valid = true

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.w100')) {
            const label = campo.previousElementSibling.innerHTML;
            if(!campo.value) {
                this.criaErr(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            };

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            };

            if(campo.classList.contains('user')) {
                if(!this.validaUsuario(campo)) valid = false;
            };
            
            if(campo.classList.contains('password')) {
                if(!this.validaSenha(campo)) valid = false;
            };
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErr(campo, 'CPF inválido');
            return false;
        }
        
        return true;
    }

    validaUsuario(campo) {
        const user = campo.value

        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErr(campo, 'Nome de usuário precisa conter apenas letras e/ou números');
            return false;
        }

        if(user.length > 12 || user.length < 3) {
            this.criaErr(campo, 'Nome de usuário estar entre 3 e 12 caracteres');
            return false;
        }

        return true;

    }

    validaSenha(campo) {
        const passw = campo.value;

        if(passw.length > 12 || passw.length < 6) {
            this.criaErr(campo, 'Senha precisa estar entre 6 e 12 caracteres');
            return false;
        }
        return true;

    }

    criaErr(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    } 
}

const valida = new ValidaFormulario();

