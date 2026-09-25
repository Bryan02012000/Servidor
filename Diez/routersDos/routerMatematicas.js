const express=require('express');
const {infoCursos}=require('../../Siete/cursosDos');
const app=express();
const routerMatematicas=express.Router();

//ROUTER MATEMÁTICAS


routerMatematicas.get("/",(req,res)=>{
    res.send(infoCursos.matematicas);
});

routerMatematicas.get("/:tema",(req,res)=>{
    const tema=req.params.tema.toLowerCase();
    const resultado=infoCursos.matematicas.filter(curso=>curso.tema.toLocaleLowerCase()==tema);

    if(resultado==0){
        return res.status(404).send("Tema "+tema+" aún no está");
    }

    if(req.query.ordenar==='vistas'){
        return res.send(JSON.stringify(resultado.sort((a,b)=>b.visitas-a.visitas)))
    }
    return res.send(JSON.stringify(resultado));
});

routerMatematicas.get("/api/cursos/programacion/:tema/:nivel",(req,res)=>{
    const tema=req.params.tema.toLowerCase();
    const nivel=req.params.nivel.toLocaleLowerCase();
    const resultado=infoCursos.tema.filter(curso=>curso.tema.toLocaleLowerCase()==tema && curso.nivel.toLocaleLowerCase()==nivel);

    if(resultado==0){
        res.status(404).send("Tema "+tema+" aún no está");
    }
   return res.send(JSON.stringify(resultado));
});

module.exports=routerMatematicas;