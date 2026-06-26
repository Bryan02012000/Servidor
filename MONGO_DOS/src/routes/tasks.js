const express=require('express');
const router=express.Router();
const Task=require('../Models/Taks');


// GET /tasks?priority=high&done=false&page=1
router.get('/', async (req, res, next) => {
    try{
        const { priority, done, page = 1 } = req.query;
        const filter = {};

        // Solo agrega el filtro si viene en la URL
        if (priority) filter.priority = priority;
        if (done !== undefined) filter.done = done === 'true';

        const tasks = await Task
          .find(filter)
          .populate('user', 'name')
          .sort({ createdAt: -1 })   // más recientes primero
          .limit(10)                  // máx 10 por página
          .skip((page - 1) * 10);   // saltar páginas anteriores

        res.json(tasks);
    }catch(err){
        next(err);
    }
  
});

router.post("/",async(req,res, next)=>{
    try{
        const tasks=await Task.create(req.body);
        res.status(201).json(tasks);

    }catch(err){
        next(err);
    }
})

router.put("/:id",async(req,res, next)=>{
    try{
        const tasks=await Task.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.json(tasks);
    }catch(err){
        next(err);
    }
})

router.delete("/:id",async(req,res,next)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.json({message:"Tarea eliminada"});

    }catch(err){
        next(err);
    }
})

module.exports=router;

