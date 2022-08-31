const mongoose = require("mongoose");

const conexao = async () => {
  const atlas = await mongoose.connect(
    "mongodb+srv://1234:1234@fiaptecnico.dakr2.mongodb.net/html5z"
  );
};

const modelo = mongoose.Schema({
  estilo: String,
  imagem: String,
  titulo: String,
  texto: String,
  publicado: { type: Date, default: Date.now },
});

const conteudo = mongoose.model('conteudo', modelo)

module.exports = { conexao, conteudo }