require('dotenv').config();
const express=require('express');
const mongoose = require('mongoose');
const taskRoutes=require('./src/routes/tasks');
const userRoutes=require('./src/routes/users');
const errorHandler=require('./src/Middleware/errorHadler')


const app=express();
app.use(express.json());

app.use("/tasks",taskRoutes);
app.use("/users",userRoutes);
app.use(errorHandler);


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MONGODB CONECTADO");
})
.catch((err)=>{
    console.log("ERROR: "+err);
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("SERVIDOR ESCUCHANDO EN EL PUERTO: "+PORT);
})
