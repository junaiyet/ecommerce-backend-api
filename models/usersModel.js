const mongoose = require('mongoose');

const {Schema} = mongoose


const userSchema = new Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    avatar:{
        type:String,
    },
    emailVarified:{
        type:Boolean,
        default:false
    },
    marchant:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:"member",
        enum:["admin","member","marchant"]
    },
    randomOtp:{
        type:String,
    },
    updated:{
        type:Date, 
    },
    created:{
        type:Date, 
        default: Date.now
    },
    facbookId:{
        type:String, 
    },
    linkedinId:{
        type:String, 
    }
})

module.exports = mongoose.model("User",userSchema)