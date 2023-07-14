const mongoose = require('mongoose');

const {Schema} = mongoose

const optionSchema = new Schema({
    name:{
      type:String,
      require:true
    },
    value:[
        {
            name:{
                type:String,
                require:true 
            },
            price:{
                type:String,
            },
            quantity:{
                type:Number,
                require:true
            }
        }
   ],
    updated:{
        type:Date, 
    },
    created:{
        type:Date, 
        default: Date.now
    }
})

module.exports = mongoose.model("Option",optionSchema)