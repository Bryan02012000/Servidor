const express=require('express');
const {infoCursos}=require('../Siete/cursosDos');
const app=express();
const routerProgramacion=require('./routersDos/routerProgramacion');
const routerMatematicas=require('./routersDos/routerMatematicas');
app.use('/api/cursos/programacion',routerProgramacion);
app.use('/api/cursos/matematicas',routerMatematicas);
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("EL PRIMER SERVIDOR CON EXPRESS");
});

app.get("/api/cursos",(req,res)=>{
    res.send(infoCursos);
});


app.post("/api/cursos/programacion",(req,res)=>{
    console.log(req.body.titulo);
    res.send("El servidor recibió una solicitud POST")
});


const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Servidor escuchando en el puerto "+PORT);
});