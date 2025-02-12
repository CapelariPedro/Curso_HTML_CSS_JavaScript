const express = require("express");
const Produto = require("../models/Produto");
const router = express.Router();

router.post("/", async (req, res) =>{
    try{
        const produto = new Produto(req.body);
        await produto.save();
        res.status(201).json(produto);
    }catch(err){
        res.status(400).json({error: err.message});
    }

});

router.get("/", async(req,res) =>{
    try{
        const produtos = await Produto.find();
        res.json(produtos);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.put("/:id", async(req, res)=>{
    try{
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(produto);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.delete("/:id", async(req, res)=>{
    try{
        await Produto.findByIdAndDelete(req.params.id);
        res.json({message: "Produto removido!"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});


module.exports = router;