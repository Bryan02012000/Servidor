const express=require('express');
const router=express.Router();
const User=require('../Models/User');

router.get('/', async(req,res, next)=>{
    try{
        const {role,page = 1}=req.query;
        const filter={}

        if(role) filter.role=role;

        const users= await 
        User.find(filter)
        .sort({createdAt:-1})
        .limit(10)                  // máx 10 por página
        .skip((page - 1) * 10); 

        res.json(users);
    }catch(err){
        next(err);
    }
});

router.post('/', async(req,res, next)=>{
    try{
        const users= await User.create(req.body);
        res.json(users)

    }catch(err){
        next(err);
    }
});

router.delete('/:id', async(req,res, next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({message: 'USUARIO ELIMINADO'})

    }catch(err){
        next(err);
    }
});

module.exports=router;

