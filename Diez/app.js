const {infoCursos}=require("./cursos");
const express=require('express');
//console.log(JSON.stringify(infoCursos));
const app=express();
app.use(express.json());
const routerMatematicas=require("./routers/routerMatematicas");
const routerProgramacion=require("./routers/routerProgramacion");

app.use("/api/cursos/programacion",routerProgramacion);
app.use("/api/cursos/matematicas",routerMatematicas);



app.get("/",(req,res)=>{
    return res.end("Mi primer servidor con express");
});

app.get("/api/cursos",(req,res)=>{
    return res.end(JSON.stringify(infoCursos));
});


app.post("/api/cursos/programacion",(req,res)=>{

    /*let cuerpo="";
    req.on("data",contenido=>{
        cuerpo+=contenido.toString();
        cuerpo=JSON.parse(cuerpo);
        console.log(cuerpo.titulo);
    });

    req.on("end",()=>{
        res.end("El servidor recibió una solicitud POST");

    });*/

    console.log(req.body.titulo);
    res.end("El servidor recibió una solicitud POST");

});


const PUERTO=process.env.PORT || 3000;

app.listen(PUERTO,()=>{
    console.log("Servidor escuchando en el puerto "+PUERTO+"...");
})

