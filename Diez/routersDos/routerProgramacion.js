const express=require('express');
const {infoCursos}=require('../../Siete/cursosDos');
const app=express();
const routerProgramacion=express.Router();


////ROUTER PROGRAMACION
routerProgramacion.get("/",(req,res)=>{
    res.send(infoCursos.programacion);
});

routerProgramacion.get("/:lenguaje",(req,res)=>{
    const lenguaje=req.params.lenguaje.toLowerCase();
    const resultado=infoCursos.programacion.filter(curso=>curso.lenguaje.toLocaleLowerCase()==lenguaje);

    if(resultado==0){
        return res.status(404).send("Lenguaje "+lenguaje+" aún no está");
    }

    if(req.query.ordenar==='vistas'){
        return res.send(JSON.stringify(resultado.sort((a,b)=>b.visitas-a.visitas)))
    }
    return res.send(JSON.stringify(resultado));
});

routerProgramacion.get("/api/cursos/programacion/:lenguaje/:nivel",(req,res)=>{
    const lenguaje=req.params.lenguaje.toLowerCase();
    const nivel=req.params.nivel.toLocaleLowerCase();
    const resultado=infoCursos.programacion.filter(curso=>curso.lenguaje.toLocaleLowerCase()==lenguaje && curso.nivel.toLocaleLowerCase()==nivel);

    if(resultado==0){
        res.status(404).send("Lenguaje "+lenguaje+" aún no está");
    }
   return res.send(JSON.stringify(resultado));
});

module.exports=routerProgramacion;