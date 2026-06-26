const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    title:{
        type: String,
        require: true,
        minLength:3
    },
    done:{
        type:Boolean,
        default:false
    },
    priority:{
        type: String,
        enum:['low','medium','high'],
        default:'medium'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

const Task=mongoose.model('Task',taskSchema);
module.exports=Task;