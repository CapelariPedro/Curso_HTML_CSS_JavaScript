require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const produtosRoutes = require("./routes/produtos");
const usuariosRoutes = require("./routes/auth");

const api = express();
api.use(cors());
api.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conectado ao Banco de Dados MongoDB")).catch(err => console.log("Erro ao conectar:", err));

api.use("/api/produtos", produtosRoutes);
api.use("/api/usuarios", usuariosRoutes);

const PORT = process.env.PORT || 5000;

api.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));