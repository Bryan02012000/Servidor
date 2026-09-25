const http=require("http");
const servidor=http.createServer((req,res)=>{
    res.end("Hola mundossss");
})

servidor.listen(3000,()=>{
    console.log("SERVIDOR ESCUCHANDO")
})