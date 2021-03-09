const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET    PUT    DELETE   

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    <label><span>Nome do site: </span> <input type="text" name="nome"> </label>
    <button>Enviar Formulário</button>
    </form>
    `)
});

app.get('/testes/:idUsers?', (req, res) => {
    console.log(req.params)
    res.send('oi')
});

app.post('/', (req, res) => {
    res.send('Recebi o form')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});

