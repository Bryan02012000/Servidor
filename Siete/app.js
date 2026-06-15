const http=require('http');
const servidor=http.createServer((req,res)=>{
    console.log(req.url);
    res.end("Hola mundo")
})

servidor.listen(3000,()=>{
    console.log("El servidor está esuchando...")
})