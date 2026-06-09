function saludar(nombre){
    return "Hola, "+nombre;
}
function saludarDos(nombreUno,nnombreDos){
    return "Hola, "+nombreUno+" y "+nnombreDos;
}

module.exports={
    saludar:saludar,
    saludarDos:saludarDos
};

module.exports.saludar=saludar;
module.exports.saludarDos=saludarDos;