const User = require("../models/usersModel.js")
const Product = require("../models/productSchema.js")
const Variant = require("../models/variantSchema.js")



async function secureUpload(req,res,next) {
    console.log(req.headers.authorization.split('@'))
    let userid = req.headers.authorization.split('@')[1]
    let password = req.headers.authorization.split('@')[2]

    if (!req.headers.authorization) {
      return res.send({error:"unauthorizad"})    
    }

    let user = await User.find({_id:userid})


    
    if (user.length > 0) {
       
        if (password == process.env.MERCHANT_SECRET_KEY) {
             if (user[0].role == "merchant") {
                next()  
                }      
        }else{
            return res.send({error:"You are not able to create product!"})  

        }
     
            }else{

                return res.send({error:"aYou are not able to create product"})  
            }


    // console.log(user)

   
}
async function createProduct(req,res) {
    let {name,description,image,store} = req.body
    if (!name) {
        return res.send({error:"Enter name"})
    }
    if (!description) {
        return res.send({error:"Enter description"})
    }
    if (!image) {
        return res.send({error:"Enter image"})
    }
    if (!store) {
        return res.send({error:"Enter store"})
    }
    let product =new Product({
        name,
        description,
        image,
        store
    })


    product.save()
    res.send({success:"Product Create Successfully"})
}

async function createVariant(req,res) {
    let {name,image,product} = req.body
    let duplicatevariant = await Variant.find({name})
     
    if (duplicatevariant.length> 0) {
       return res.send({error:"Variant Already Exist. Try another"})
    }
    let variant =new Variant({
        name,
        image,
        product
    })


    variant.save()
    await Product.findOneAndUpdate({_id:variant.product},{$push:{variants:variant._id}},{new:true})
    res.send({success:"Variant Create Successfully"})
}
module.exports = {secureUpload,createProduct,createVariant}