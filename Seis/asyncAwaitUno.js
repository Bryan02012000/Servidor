function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log("Ordenando: "+producto+" de Bryan")
        setTimeout(()=>{
            if(producto==="taza"){
                resolve("respuesta recibida")
            }
            else{
                reject("Error, producto no encontrado")
            }
        },1000)
    })
}

function procesarPedido(respuesta){
    return new Promise((resolve,reject)=>{
        console.log("Porcesando respuesta...");
        console.log("La respuesta fue: "+respuesta);
        setTimeout(()=>{
            resolve("Gracias por tu respuesta, disfruta tu producto")
        },700)
    })
}


ordenarProducto("hola")
.then((pedido)=>{
    console.log(pedido)
    return procesarPedido(pedido)
})
.then((respuestaProcesada)=>{
    console.log(respuestaProcesada)
})
.catch((error)=>{
    console.log(error)
});

