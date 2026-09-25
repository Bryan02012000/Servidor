const mongoose=require('mongoose');
const express=require('express');
require('dotenv').config();
const userRouter=require('./src/routers/users');
const taskRouter=require('./src/routers/tasks');

const app=express();
app.use(express.json());

app.use('/users',userRouter);
app.use('/tasks',taskRouter);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MONGO DB CONECTADO");
}).catch((err)=>{
    console.log("Falló: "+err);
});

app.get("/", async(req,res)=>{
    res.status(200).send("SERVIDOR INICIO");

})

//PARA MANEJAR RUTAS NO ENCONTRADAS
app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada",
        mensaje: `El endpoint ${req.originalUrl} no existe en este servidor`
    });
});

const PUERTO=process.env.PORT || 3000;
app.listen(PUERTO,()=>{
   console.log("SERVIDOR ESCUCHADNO EN EL PUERTO: "+PUERTO);
});
