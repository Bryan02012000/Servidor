const EventEmitter=require("events");

const emisorProducto=new EventEmitter();

emisorProducto.on("compra", (producto)=>{
    console.log("Se acapa de comprar el producto: "+producto);
})

emisorProducto.emit("compra", "carro");