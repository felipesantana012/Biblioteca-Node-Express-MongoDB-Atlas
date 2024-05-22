import express from "express";
import conectarNaDataBase from "./config/dbConnect.js";
import livro from "./models/Livros.js";

const conexao = await conectarNaDataBase();

conexao.once("open", () => {
    console.log("Conexão com banco feita com sucesso");
})


conexao.on("error", (erro) => {
    console.error("erro de conexaaaaaaaaaaaaaão" , erro);
});


const app = express();
app.use(express.json()) //conveção do arquivo que vem do body para json para conseguir manipulalo, pois todos os dados que chega no req.body são String.





app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({})
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index =  buscaLivro(req.params.id)
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put("/livros/:id", (req, res) => {
    const index =  buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index =  buscaLivro(req.params.id);
    livros.splice(index,1);
    res.status(200).send("Livro Removido com sucesso");
})

export default app;


