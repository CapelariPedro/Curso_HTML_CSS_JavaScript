const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    quantidade: {type: Number, required: true},
    preco: {type: Number, required: true}
});

module.exports = mongoose.model("Produto", ProdutoSchema);