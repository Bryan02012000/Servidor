//Importamos
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3'); 
const multer = require ('multer');
const router = require('express').Router();

const s3 = new S3Client({
    region:process.env.AWS_REGION,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
    }
});

const upload=multer({storage:multer.memoryStorage()});

router.post('/', upload.single('archivo'), async(req,res,next)=>{
    try{
        if(!req.file){
            return res.status(400).json({error:'No se encontró ningún archivo'});
        }

        const key = `uploads/${Date.now()}-${req.file.originalname}`;

        await s3.send(new PutObjectCommand({
            Bucket:process.env.AWS_BUCKET_NAME,
            Key:key,
            Body:req.file.buffer,
            ContentType: req.file.mimetype
        }))

        const url = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

        res.json({
            mensaje:'Archvo subido con éxito',
            url:url
        });


    }catch(err){
        console.error('ERROR S3: ',err);
        next(err);
    }

});

module.exports = router;