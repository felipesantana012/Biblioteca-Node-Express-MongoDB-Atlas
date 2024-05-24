import express from "express";
import LivroController from "../controller/LivroController.js";


const routes = express.Router();

//importante ordenar as rotas com grau de complexidade, do mais de dificil para mais facil
routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/busca", LivroController.listarLivrosPorEditora);

routes.get("/livros/:id", LivroController.listarLivroPorId);

routes.post("/livros", LivroController.cadastrarLivro);

routes.put("/livros/:id", LivroController.atualizarLivro);

routes.delete("/livros/:id", LivroController.excluirLivro);


export default routes;