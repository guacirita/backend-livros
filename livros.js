const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const livros = [
    {
        nome: "Por um feminismo afro-latino-americano",
        autora: " Lélia Gonzalez",
        imagem: "https://m.media-amazon.com/images/P/B08GJSK6N5.01._SCLZZZZZZZ_SX500_.jpg",
        categoria: "Política e Ciencias Sociais/"
    },
    {
        nome: "Tornar-se negro: Ou As vicissitudes da identidade do negro brasileiro em ascensão social",
        autora: " Neusa Santos Souza",
        imagem: "https://m.media-amazon.com/images/P/B09CHGTC4C.01._SCLZZZZZZZ_SX500_.jpg",
        categoria: "Política e Ciencias Sociais/"
    },
    {
        nome: "Pele negra, máscaras brancas",
        autora: "Frantz Fanon",
        imagem: "https://m.media-amazon.com/images/P/B08NWFS12B.01._SCLZZZZZZZ_SX500_.jpg",
        categoria: "Política e Ciencias Sociais/"
    }
]

function mostraLivros(request, response) {
    response.json(livros);
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta);
}


app.use(router.get('/livros', mostraLivros));
app.listen(porta, mostraPorta);