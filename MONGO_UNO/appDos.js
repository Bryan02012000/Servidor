require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const taskRoutes=require("./src/routes/tasks");
const userRoutes=require("./src/routes/users")

const app=express();
app.use(express.json());

app.use("/tasks",taskRoutes);
app.use("/users",userRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MONGO DB CONECTADO");
})
.catch((err) =>{
    console.log("Fallo: "+err);
})


const PUERTO=process.env.PORT || 3000;
app.listen(PUERTO,()=>{
    console.log("SERVIDOR ESCUCHADNO EN EL PUERTO: "+PUERTO);
});
