require('dotenv').config();
const express=require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRoutes=require('./src/routes/tasks');
const userRoutes=require('./src/routes/users');
const uploadRoutes = require('./src/routes/upload');
const errorHandler=require('./src/Middleware/errorHadler')

const app = express();

app.use(cors());
app.use(express.json());


app.use("/tasks",taskRoutes);
app.use("/users",userRoutes);
app.use("/upload", uploadRoutes);
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
