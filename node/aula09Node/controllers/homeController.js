exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    <label><span>Nome do site: </span> <input type="text" name="nome"> </label>
    <button>Enviar Formulário</button>
    </form>`)
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
};