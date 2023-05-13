const express = require("express");
const router = express.Router();


const app = express();
const porta = 3333;

function mostraLivro(request, response){
    response.json({
        nome: "Por um feminismo afro-latino-americano",
        autora: " Lélia Gonzalez",
        imagem: "https://m.media-amazon.com/images/P/B08GJSK6N5.01._SCLZZZZZZZ_SX500_.jpg",
        categoria: "Política e Ciencias Sociais/"
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta);
}


app.listen(porta, mostraPorta);