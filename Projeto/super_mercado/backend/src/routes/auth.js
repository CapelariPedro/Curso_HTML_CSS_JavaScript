const express = require("express");
const Usuario = require("../models/Usuario");
const router = express.Router();

router.post("/register", async (req, res) =>{
    try{
        const{nome, senha, email} = req.body;

        if(!nome || !senha || !email){
            return res.status(400).json({error: "Todos os campos são obrigatórios."})

        }

        let usuarioExistente = await Usuario.findOne({email});
        if(usuarioExistente){
            return res.status(400).json({error: "Email já Cadastrado"});

        }

        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json({message: "Usuário cadastrado com Sucesso"});
    }catch(err){
        res.status(500).json({error: "Erro ao Cadastrar o usuário || Erro interno do servidor"})
        console.error(err);

    }
});


router.post("/login", async (req, res)=>{
    try{

        const {email, senha} = req.body;

        if (!email || !senha){
            return res.status(400).json({error: "Todos os campos são obrigatorios"});
        }

        const usuario = await Usuario.findOne({email, senha});
        if (!usuario.email){
            return res.status(400).json({error: "Usuário não encontrado"});
        }

        if(!usuario.senha){
            return res.status(400).json({error: "Senha incorreta"});
        }

        res.status(201).json({message: "Login realizado com sucesso"});

    }catch(err){
        console.err("Erro ao fazer login: ", err);
        res.status(500).json({error: "Erro ao Logar || Erro interno do servidor"})
    }

});

module.exports = router;