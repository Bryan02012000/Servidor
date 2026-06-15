const estatusPedido=()=>{
    const estatus=Math.random()<0.8;
    return estatus;
}

const miPedidoPizza=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(estatusPedido()==true){
        resolve("Pizza en camino");
    }else{
        reject("Error al procesar pedido");
    }
    },100)
});

/*const pizzaBien=(pedido)=>{
    console.log(pedido);
}

const errorPizza=(error)=>{
    console.log(error);
}

miPedidoPizza.then(pizzaBien,errorPizza);*/

miPedidoPizza
.then((pedido)=>{
    console.log(pedido);
})
.catch((error)=>{
    console.log(error);
})

