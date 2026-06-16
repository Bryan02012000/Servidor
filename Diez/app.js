const {infoCursos}=require("./cursos");
const express=require('express');
//console.log(JSON.stringify(infoCursos));
const app=express();
const routerMatematicas=require("./routers/routerMatematicas");
const routerProgramacion=require("./routers/routerProgramacion");

app.use("/api/cursos/programacion",routerProgramacion);
app.use("/api/cursos/matematicas",routerMatematicas);
routerProgramacion.use(express.json());


app.get("/",(req,res)=>{
    return res.end("Mi primer servidor con express");
});

app.get("/api/cursos",(req,res)=>{
    return res.end(JSON.stringify(infoCursos));
});


routerProgramacion.post("/",(req,res)=>{

    /*let cuerpo="";
    req.on("data",contenido=>{
        cuerpo+=contenido.toString();
        cuerpo=JSON.parse(cuerpo);
        console.log(cuerpo.titulo);
    });

    req.on("end",()=>{
        res.end("El servidor recibió una solicitud POST");

    });*/

    let cursoNuevo=req.body;
    infoCursos.programacion.push(cursoNuevo);
    res.send(JSON.stringify(infoCursos.programacion));

});

routerProgramacion.put("/:id",(req,res)=>{
    const cursoActualizado=req.body;
    const id=req.params.id;

    const indice=infoCursos.programacion.findIndex(curso=>curso.id==id);

    if(indice>=0){
        infoCursos.programacion[id-1]=cursoActualizado
    }
    res.send(JSON.stringify(infoCursos.programacion));

});

routerProgramacion.patch("/:id", (req,res)=>{
    const id=req.params.id;
    const infoActualizada=req.body;

    const indice=infoCursos.programacion.findIndex(curso=>curso.id==id);

    if(indice>=0){
        const cursoAModificar=infoCursos.programacion[indice];
        Object.assign(cursoAModificar,infoActualizada);
    }

    res.send(JSON.stringify(infoCursos.programacion))
});

routerProgramacion.delete("/:id",(req,res)=>{
    const id=req.params.id;
    const indice=infoCursos.programacion.findIndex(curso => curso.id==id);

    if(indice>=0){
        infoCursos.programacion.splice(indice,1);
    }
    res.send(JSON.stringify(infoCursos.programacion));
})


const PUERTO=process.env.PORT || 3000;

app.listen(PUERTO,()=>{
    console.log("Servidor escuchando en el puerto "+PUERTO+"...");
})

