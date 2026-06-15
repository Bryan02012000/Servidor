const express=require('express');
const routerProgramacion=express.Router();
const {infoCursos}=require("../cursos.js");
const app=express();


routerProgramacion.get("/",(req,res)=>{
    if(req.query.ordenar==='visitas'){
        return res.send(JSON.stringify(infoCursos.programacion.sort((a,b)=>b.visitas-a.visitas)));
    }else{
        return res.end(JSON.stringify(infoCursos.programacion));
    }
});

routerProgramacion.get("/:lenguaje",(req,res)=>{
    const lenguaje=req.params.lenguaje.toLowerCase();
    const resultado=infoCursos.programacion.filter(curso=>curso.lenguaje.toLocaleLowerCase()==lenguaje);

    if(resultado==0){
        return res.end("No existe curso del lenguaje "+lenguaje);
    }
    
    if(req.query.ordenar==='vistas'){
        res.send(JSON.stringify(resultado.sort((a,b)=>b.vistas-a.vistas)));
    }else{
        return res.send(JSON.stringify(resultado));
    }
});

routerProgramacion.get(":lenguaje/:nivel",(req,res)=>{
    const lenguaje=req.params.lenguaje.toLowerCase();
    const nivel=req.params.nivel.toLocaleLowerCase()
    const resultado=infoCursos.programacion.filter(curso=>curso.lenguaje.toLocaleLowerCase()==lenguaje && curso.nivel.toLocaleLowerCase()==nivel);

    if(resultado==0){
        return res.end("No existe curso del lenguaje "+lenguaje);
    }
    
    if(req.query.ordenar==='vistas'){
        res.send(JSON.stringify(resultado.sort((a,b)=>b.vistas-a.vistas)));
    }else{
        return res.send(JSON.stringify(resultado));
    }
});

module.exports=routerProgramacion;