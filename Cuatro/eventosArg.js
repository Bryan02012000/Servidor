const EventEmitter=require("events");
const emisorProducto=new EventEmitter();

emisorProducto.on("compra",(producto)=>{
    console.log("Se realizó la compra de "+producto);
});

emisorProducto.emit("compra","Laptop");