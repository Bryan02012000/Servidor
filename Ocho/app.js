const express=require('express');
const app=express();
const {infoCursos}=require("../Siete/cursos");
const { info } = require('node:console');

app.get('/', (req,res)=>{
    res.end("MI PRIMER SERVIDOR CON EXPRESS");
});

app.get('/cursos',(req,res)=>{
    res.end(JSON.stringify(infoCursos));
});

app.get('/cursos/programacion/:lenguaje',(req,res)=>{
    const lenguaje=req.params.lenguaje.toLowerCase();
    const resultados=infoCursos.programacion.filter(curso=>curso.lenguaje.toLowerCase()===lenguaje);
    
    if(resultados.length==0){
        return res.status(400).end("No se encontraron resultados con el lenguaje "+lenguaje);
    }
    if(req.query.ordenar=='vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b)=>b.vistas-a.vistas)));
    }else{
        return res.end(JSON.stringify(resultados));
    }
});

app.get('/cursos/programacion/:lenguaje/:nivel',(req,res)=>{
    const lenguaje=req.params.lenguaje.toLowerCase();
    const nivel=req.params.nivel;
    const resultados=infoCursos.programacion.filter(curso=>curso.lenguaje.toLowerCase()===lenguaje && curso.nivel==nivel);
    
    if(resultados.length==0){
        return res.status(400).end("No se encontraron resultados con el lenguaje "+lenguaje+" y nivel "+nivel);
    }
    return res.end(JSON.stringify(resultados));
});

const PUERTO=process.env.PORT || 3000;

app.listen(PUERTO, ()=>{
    console.log("Servidor escuchando en el puerto: "+PUERTO+" ...");
});