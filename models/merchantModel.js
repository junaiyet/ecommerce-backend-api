const mongoose = require('mongoose');

const {Schema} = mongoose

const storeSchema = new Schema({
    storename:{
        type:String,
        require:true
    },
        officialemail:{
        type:String,
        require:true
    },
    officialPhone:{
    type:String,
    require:true
    },
    address:{
    type:String,
    require:true 
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        require:true 
    },
    products:[{
    type:Schema.Types.ObjectId,
    ref:"Product"
    }]
})


module.exports = mongoose.model("Store",storeSchema)