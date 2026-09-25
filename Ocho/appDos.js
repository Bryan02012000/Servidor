const express=require('express');
const {infoCursos}=require('../Siete/cursosDos');
const app=express();
const routerProgramacion=express.Router();
const routerMatematicas=express.Router();
app.use('/api/cursos/programacion',routerProgramacion);
app.use('/api/cursos/matematicas',routerMatematicas);
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("EL PRIMER SERVIDOR CON EXPRESS");
});

app.get("/api/cursos",(req,res)=>{
    res.send(infoCursos);
});
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

app.post("/api/cursos/programacion",(req,res)=>{
    console.log(req.body.titulo);
    res.send("El servidor recibió una solicitud POST")
})

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


const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Servidor escuchando en el puerto "+PORT);
});