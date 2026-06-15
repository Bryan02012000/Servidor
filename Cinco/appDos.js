const promesaCumplida=false;

const miPromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida==true){
            resolve("Promesa cumplida")
        }else{
            reject("promesa rechazada")
        }
    },1000);
});

const manjearPromesaCumplida=(valor)=>{
    console.log(valor);
};

const manejarPromesaRechazada=(razonRechazo)=>{
    console.log(razonRechazo);
};

miPromesa.then(manjearPromesaCumplida,manejarPromesaRechazada);