const http=require('http');
const cursos=require('./cursos');

const servidor=http.createServer((req,res)=>{
    const {method}=req;
    switch(method){
        case 'GET':
            return manejarMetodoGet(req,res);
        case 'POST':
            return manejarMetodoPost(req,res);
        default:
            res.end('no se puede manejar esa solicitud');
    }
});

function manejarMetodoGet(req,res){
    const path=req.url;
    if(path==='/'){
        res.statusCode=200;
        return res.end('BIENVENIDO AL INICIO');
    }else if(path=='/cursos'){
        res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if(path=='/cursos/programacion'){
       res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }else if(path=='/cursos/matematicas'){
        res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }
    statusCode=404;
    return res.end('No se puede manejar');
}

function manejarMetodoPost(req,res){
    const path=req.url;
    
    if(path=='/cursos/programacion'){
        let cuerpo='';

        req.on('data',contenido=>{
            cuerpo+=contenido.toString();
            cuerpo=JSON.parse(cuerpo);
            console.log(cuerpo.title);
        })
        req.on('end',()=>{
            res.end('Servidor ya recibió el post');
        })
    }
}

const PORT=3000;
servidor.listen(PORT,()=>{
    console.log("Servidor escuchando en el puerto "+PORT+"...");
})