
import mongoose from "mongoose";
import { autorSchema } from "./Autor.js"

//definir quais serao os tipos e as propriedades de um livro
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String , required: true},
    editora: {type: String },
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema

}, {versionKey: false}) ;

//informando qual o nome da coleção que vai esta no banco, e os a estrtura de dados que vai ser passada
const livro = mongoose.model("livros", livroSchema);

export default livro;