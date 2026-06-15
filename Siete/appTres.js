const cursos=require('./cursos')
const http=require('http');


const servidor=http.createServer((req,res)=>{
    const {method}=req;

    switch(method){
        case 'GET':
            return manejarSolicitudGet(req,res);
        case 'POST':
            return manejarSolicitudPost(req,res);
        default:
            res.statusCode=501;
            res.end("EL MÉTODO NO PUEDE SER MANEJADO POR EL SERVIDOR")
    }
});

function manejarSolicitudGet(req,res){
    const path=req.url;
    
    if(path=='/'){
        res.statusCode=200;
        return res.end('Bienvenido a mi primer servidor API creado con node.js')
    }else if (path=='/cursos'){
        res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if(path=='/cursos/programacion'){
        res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }else if(path=='/cursos/matematicas'){
        res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }
    res.statusCode=404;
    return res.end("RECURSO NO EXISTE")
}

function manejarSolicitudPost(req,res){
    const path=req.url;

    if(path=='/cursos/programacion'){
        let cuerpo='';
        req.on('data', contenido=>{
            cuerpo+=contenido.toString();//Convertir la info a una cadena de caracteres
            console.log(typeof cuerpo);//string
            cuerpo=JSON.parse(cuerpo);//Convertir en objeto, porque mis cursos están en ese tipo
            console.log(typeof cuerpo)//objeto
            console.log(cuerpo.titulo)

        })
        req.on("end",()=>{
            res.end('El servidor recibió una solicitud POST')

        })
        //res.statusCode=200;
        //return res.end('El servidor recibió una solicitud POST')
    }
}

const PUERTO=3000;

servidor.listen(PUERTO,()=>{
    console.log("El servidor está esuchando..."+PUERTO);
})

