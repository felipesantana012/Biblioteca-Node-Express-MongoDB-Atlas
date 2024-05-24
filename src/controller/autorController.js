import { autor } from "../models/Autor.js"

class AutorController{

    static async listarAutores(req, res){
        try {
            const listarAutores = await autor.find({});
            res.status(200).json(listarAutores);   
        }
        catch (error) {
            res.status(500).json({menssagem: `${error.message}: Falha Na Requisição`});
        }       
    };


    static async listarAutorPorId(req, res){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);   
        }
        catch (error) {
            res.status(500).json({menssagem: `${error.message}: Livro não encontrado`});
        }       
    };


    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({menssagem: "Criado com sucesso", autor: novoAutor});
        }
        catch(error){
            res.status(500).json({menssagem: `${error.message} Erro ao cadastrar Livro`});
        }
    };


    static async atualizarAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({menssagem: `Livro Atualizado com sucesso`});   
        }
        catch (error) {
            res.status(500).json({menssagem: `${error.message}: Falha na Atualização`});
        }       
    };

    static async excluirAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id)
            res.status(200).json({menssagem: "Livro excluido com secesso."});   
        }
        catch (error) {
            res.status(500).json({menssagem: `${error.message}: Falha ao Apagar`});
        }       
    };



};

export default AutorController;