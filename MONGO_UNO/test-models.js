const mongoose=require('mongoose');
const User=require('./src/Models/User');
require('dotenv').config();

async function test(){
    await mongoose.connect(process.env.MONGO_URI);
    try{
        const user=new User({name:'Ana'});
        await user.validate();
        console.log('Pasó');
    }catch(err){
        console.log('Falló: ',err.message)
    }

    process.exit();
}

test();