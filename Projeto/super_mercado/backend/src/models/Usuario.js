const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: {type:String, require: true},
    senha: {type:String, require: true},
    email: {type:String, require: true, index:true, unique:true,sparse:true}
});

module.exports = mongoose.model("Usuario", UsuarioSchema);