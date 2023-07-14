const mongoose = require('mongoose');

const {Schema} = mongoose

const variantSchema = new Schema({
    name:{
      type:String,
      require:true
    },
    image:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    
    options:[
        {
            type: Schema.Types.ObjectId,
            ref:"Option"
        }
    ],
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product"    
    },
    updated:{
        type:Date, 
    },
    created:{
        type:Date, 
        default: Date.now
    }
})

module.exports = mongoose.model("Variant",variantSchema)