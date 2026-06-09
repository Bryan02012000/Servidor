const EventEmitter=require("events");
const emisorProducto=new EventEmitter();

emisorProducto.on(("compra"), ()=>{
    console.log("Se realizó la compra");
});

emisorProducto.emit("compra");