const express=require('express');
const Task=require('../Models/Task');
const taskRouter=express.Router();

taskRouter.get('/',async(req,res)=>{
    const task= await Task.find()
    res.status(200).json(task);
});

taskRouter.get('/:priority', async(req,res)=>{
    try{
        const {priority}=req.params;
        const resultado=await Task.find({
            priority: new RegExp(`^${priority}$`,'i')
        });

        if(resultado.length==0){
            return res.status(404).json({
                error:"Resultado no encontrado"
            });
        }
        return res.status(200).json(resultado);
    }catch(error){
        return res.status(500).json({
            Error: error.message
        })
    }
});

taskRouter.post('/',async(req,res)=>{
    try{
        const task=await Task.create(req.body);
        return res.status(200).json(task);

    }catch(err){
        return res.status(500).json({
            error:err.message
        });
    }
})

taskRouter.put('/:id',async(req,res)=>{
    try{
        const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).json(task);
    }catch(err){
        return res.status(500).json({
            error:err.message
        });
    }
    
})

taskRouter.delete('/:id',async(req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        return res.json({message:'Tarea eliminada'});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
    
})

module.exports=taskRouter;