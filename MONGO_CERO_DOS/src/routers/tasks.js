const express=require('express');
const Task=require('../Models/Task');
const taskRouter=express.Router();

taskRouter.get('/',async(req,res)=>{
    //populate
    //const task= await Task.find().populate('user','name email role')
    const {priority, done, page=1}=req.query;
    const filter={}

    if(priority) filter.priority=priority;
    if(done!==undefined) filter.done= done==="true";
    const task=await Task.find(filter).populate('user','name email')
    .sort({createdAt:-1}).limit(10).skip((page-1)*10);


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
        const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate('user');
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