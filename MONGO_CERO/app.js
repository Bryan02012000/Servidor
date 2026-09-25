const mongoose=require('mongoose');
const User=require('./src/Models/User');

require('dotenv').config();

async function test(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        const user=new User({name:"Angie"});
        await user.validate();
        console.log('pasó :D');

    }catch(err){
        console.log('ERROR: '+err.message)
    }

    process.exit();
}

test();