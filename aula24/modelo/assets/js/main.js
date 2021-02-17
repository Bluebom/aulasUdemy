// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementos(json));


axios('pessoas.json')
    .then(resposta => carregaElementos(resposta.data))


function carregaElementos(obj) {
    const table = document.createElement('table');
    
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = '<b>Nome</b>'
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = '<b>Idade</b>' 
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = '<b>Sexo</b>'
    tr.appendChild(td)

    table.appendChild(tr)

    for (let pessoa of obj) {

        let tr = document.createElement('tr');
        
        td = document.createElement('td')
        td.innerHTML = pessoa.nome;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td)

        td = document.createElement('td');
        if (pessoa.sexo === '') {
            td.innerHTML = ' Não binário'
        } else {
            td.innerHTML = ' ' + pessoa.sexo;
        }
        tr.appendChild(td)

        table.appendChild(tr);
    }

    const result = document.querySelector('.resultado');
    result.appendChild(table);

}

