function errorHandler(err,req,res,next){
    if(err.name==='ValidationError'){
        const messages=Object.values(err.errors)
        .map(e=>e.messages);
        return res.status(400).json({error: messages});
    }

    if(err.name==='CastError'){
        return res.status(400).json({ error: 'ID inválido' });
    }

    if (err.code === 11000) {
        return res.status(409).json({ error: 'Ya existe un registro con ese valor' });
    }

    res.status(500).json({ error: 'Error del servidor' });

}

module.exports = errorHandler;