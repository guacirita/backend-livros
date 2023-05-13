const express = require("express"); // iniciando o express
const router = express.Router(); // configurando a primeira parte da rota
const cors = require('cors'); //trazendo o pacote cors que permite esta api no frontend

const conectaBancoDeDados = require("./bancoDeDados"); // ligando o arquivo com banco de dados
conectaBancoDeDados(); // chamando a função que conecta o banco de dados

const Livro = require('./livroModel');

const app = express(); // iniciando o app
app.use(express.json());//chamando a função
app.use(cors()); // 
const porta = 3333; // criando a porta


//GET
async function mostraLivros(request, response) {
    try {
        const livrosVindosDoBancoDeDados = await Livro.find();

        response.status(200).json(livrosVindosDoBancoDeDados);
    }catch(erro) {
        console.log(erro);
    }
    
}

//POST
async function criaLivro(request, response){
    const novoLivro = new Livro({
        nome: request.body.nome,
        autora: request.body.autora,
        imagem: request.body.imagem,
        categoria: request.body.categoria
    })
    
    try{
        const livroCriado = await novoLivro.save();
        response.status(201).json(livroCriado);
    }catch(erro){
        console.log(erro);
    }
}

//PATCH
async function corrigeLivro(request, response){
   try{
    const livroEncontrado = await Livro.findById(request.params.id);
   
    if(request.body.nome) {
        livroEncontrado.nome = request.body.nome;
    }

    if(request.body.autora) {
        livroEncontrado.autora = request.body.autora;
    }

    if(request.body.imagem) {
        livroEncontrado.imagem = request.body.imagem;
    }

    if(request.body.categoria) {
        livroEncontrado.categoria = request.body.categoria;
    }

    const livroAtualizadoNoBancoDeDados = await livroEncontrado.save();
    response.json(livroAtualizadoNoBancoDeDados);
    
    }catch(erro){
    console.log(erro);
   }

}

//DELETE
async function deletaLivro(request, response) {
    try{
        await Livro.findByIdAndDelete(request.params.id);
        response.json({mensagem: "Livro deletado com sucesso!"});
    }catch(erro){
        console.log(erro);
    }

}





app.use(router.get('/livros', mostraLivros)); // configura rota GET/livros
app.use(router.post('/livros', criaLivro)); // configura rota POST/livros
app.use(router.patch('/livros/:id', corrigeLivro)); // configura a rota PATCH/livros
app.use(router.delete('/livros/:id', deletaLivro)); // configura a rota DELETE/livros

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta);
}

app.listen(porta, mostraPorta); // servidor ouvindo a porta