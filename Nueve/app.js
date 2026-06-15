const {infoCursos}=require("./cursos");
const express=require('express');
//console.log(JSON.stringify(infoCursos));
const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    return res.end("Mi primer servidor con express");
});

app.get("/api/cursos",(req,res)=>{
    return res.end(JSON.stringify(infoCursos));
});


const routerProgramacion=express.Router();
app.use("/api/cursos/programacion",routerProgramacion);
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

const routerMatematicas=express.Router();
app.use("/api/cursos/matematicas",routerMatematicas);
routerMatematicas.get("/",(req,res)=>{
    if(req.query.ordenar==='visitas'){
        return res.send(JSON.stringify(infoCursos.matematicas.sort((a,b)=>b.visitas-a.visitas)));
    }else{
        return res.end(JSON.stringify(infoCursos.matematicas));
    }
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

