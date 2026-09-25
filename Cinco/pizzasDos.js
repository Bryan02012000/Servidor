const statusPedido= ()=>{
    const estatus=Math.random()<0.8;
    return estatus;
}

/*for(let i=0; i<10; i++){
    console.log(statusPedido());
}*/

const miPedidoPizza=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(statusPedido()){
            resolve("Pedido hecho");
        }else{
            reject("Pedido no se hizo :c");
        }
    },3000)
});

const manejarPedidoHecho=(valor)=>{
    console.log(valor);
};

const manejarPedidoNoHecho=(valor)=>{
    console.log(valor);
};

miPedidoPizza.then(manejarPedidoHecho,manejarPedidoNoHecho);