const express=require('express');
const User=require("../Models/User");
const router=express.Router();

router.get('/', async(req,res)=>{
    const user=await User.find();
    res.status(200).json(user);
});

router.post('/', async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(201).json(user)

    }catch(err){
        res.status(404).json({error: err.message})
    }
});

router.delete('/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({message: "Uusario  eliminado"})
})


module.exports=router