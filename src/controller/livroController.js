import { autor } from "../models/Autor.js";
import livro from "../models/Livros.js";


class LivroController{

    static async listarLivros(req, res){
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);   
        }
        catch (error) {
            res.status(500).json({menssagem: `${error.message}: Falha Na Requisição`});
        }       
    };


    static async listarLivroPorId(req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);   
        }
        catch (error) {
            res.status(500).json({menssagem: `${error.message}: Livro não encontrado`});
        }       
    };


    static async cadastrarLivro(req, res){
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor); //mongo pega outras coisas alem dos dados soliciados
            const livroComAutor = {...novoLivro, autor: {...autorEncontrado._doc}} //._doc pega apenas o documento em si
            const livroCriado = await livro.create(livroComAutor);
            res.status(201).json({menssagem: "Criado com sucesso", livro: livroCriado});
        }
        catch(error){
            res.status(500).json({menssagem: `${error.message} Erro ao cadastrar Livro`});
        }
    };


    static async atualizarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({menssagem: `Livro Atualizado com sucesso`});   
        }
        catch (error) {
            res.status(500).json({menssagem: `${error.message}: Falha na Atualização`});
        }       
    };

    static async excluirLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id)
            res.status(200).json({menssagem: "Livro excluido com secesso."});   
        }
        catch (error) {
            res.status(500).json({menssagem: `${error.message}: Falha ao Apagar`});
        }       
    };


    static async listarLivrosPorEditora (req, res) {
        const nomeEditora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora: nomeEditora});
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.status(500).json({menssagem: `${error.message}: Falha na Busca`});
        }

    }



};

export default LivroController;