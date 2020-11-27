const express = require("express")
const mongoose = require("mongoose")
const Route = express.Router();
const Moddel = require("../Schema/Model")

Route.get('/', async(req,res)=>{
    const NewData = await Moddel.find()
    res.status(200).json(NewData);
});
Route.get('/:id', async (req,res)=>{
    const NewData = await Moddel.findById(req.params.id)
    res.status(200).json(NewData)
});
Route.post("/", async(req,res)=>{
    const NewData = await Moddel.create(req.body);
    res.status(200).json(NewData);
});
Route.patch("/:id", async(req,res)=>{
    const NewData = await Moddel.findByIdAndUpdate(req.params.id,  req.body, {
        new : true,
    });
    res.status(200).json(NewData)
});
Route.delete("/:id", async(req,res)=>{
    const NewData = await Moddel.findByIdAndDelete(req.params.id);
    res.status(200).send("Deleted");
});

module.exports = Route

