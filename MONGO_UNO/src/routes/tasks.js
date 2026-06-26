const express=require('express');
const Task=require("../Models/Task");
const router=express.Router();


router.get('/',async(req,res) =>{
    const task=await Task.find().populate('user','name email');
    res.json(task);
});

router.post('/', async(req,res)=>{
    try{
        const task=await Task.create(req.body);
        res.status(201).json(task)

    }catch(err){
        res.status(404).json({error: err.message})
    }
})

router.put('/:id', async(req,res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.json(task);
})


router.delete('/:id',async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message: "Tarea eliminada"})
})
module.exports=router;

