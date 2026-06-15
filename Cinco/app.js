const promesaCumplida=true;

const miPromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida==true){
            resolve("Promesa cumplida")
        }else{
            reject("Promesa rechazada")
        }
    },3000,)
});

miPromesa.then((valor)=>{
    console.log(valor);
});