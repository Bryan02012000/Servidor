const express=require('express');
const routerMatematicas=express.Router();
const {infoCursos}=require("../cursos.js");


routerMatematicas.get("/",(req,res)=>{
    if(req.query.ordenar==='visitas'){
        return res.send(JSON.stringify(infoCursos.matematicas.sort((a,b)=>b.visitas-a.visitas)));
    }else{
        return res.end(JSON.stringify(infoCursos.matematicas));
    }
});

module.exports=routerMatematicas;