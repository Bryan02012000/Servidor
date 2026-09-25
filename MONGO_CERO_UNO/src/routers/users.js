const mongoose=require('mongoose');
const express=require('express');
const User=require('../Models/User')
const userRouter=express.Router();

userRouter.get('/', async(req,res)=>{
    const user=await User.find();
    res.status(200).json(user);
});

userRouter.get('/:role',async(req,res)=>{
    try{
        const {role}=req.params;
        const resultado=await User.find({
            role:new RegExp(`^${role}$`,'i')
        });
        if(resultado.length==0){
            return res.status(400).json({
                error:"Busqueda no encontrada"
            });
        }
        return res.status(200).json(resultado);
    }catch(err){
        res.status(500).json({
            error:"Error de busqueda"
        })
    }
    
    
})

userRouter.post('/', async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(200).json(user)
    }catch(error){
        res.status(404).json({
            mensaje:error.message
        })
    }
})

userRouter.put('/:id',async(req,res)=>{
    const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(user)
})

userRouter.delete('/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({
        message:"Uusario eleiminado"
    })
})

module.exports=userRouter;