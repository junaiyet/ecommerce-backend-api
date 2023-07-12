
const Category = require("../models/categoryModel.js")
const SubCategory = require("../models/subCategoryModel.js")
// ================= category ================== //

async function createCategoryController (req,res) {
    const {name,description} = req.body
    console.log(name,description)

    let duplicateCategory = await Category.find({name})
     
    if (duplicateCategory.length> 0) {
       return res.send({error:"Category Already Exist. Try another"})
    }


    let category = new Category({
        name,
        description
    })

    category.save()
    res.send({success:"Category Created Successfully"})
}

async function categoryStatusController (req,res) {
    const {name,status} = req.body
    console.log(name,status)

    if (status == "rejected" || status == "waiting") {
        let updateCategory = await Category.findOneAndUpdate({name},{$set:{isActive:false,status}},{new:true})
    
        return res.send({success:"Status Updated"})
    }else if(status == "approved" ){
        let updateCategory = await Category.findOneAndUpdate({name},{$set:{isActive:true,status}},{new:true})

        return res.send({success:"Status approved"})
    }

   
}
// ================= subCategory ================== //

async function createSubCategoryController (req,res) {
    const {name,description,category} = req.body

    let duplicateSubCategory = await SubCategory.find({name})
     
    if (duplicateSubCategory.length> 0) {
       return res.send({error:"Category Already Exist. Try another"})
    }


    let subcategory = new SubCategory({
        name,
        description,
        category
    })

    subcategory.save()
    console.log(subcategory._id)
    await Category.findOneAndUpdate({_id:subcategory.category},{$push:{subCategory:subcategory._id}},{new:true})
    res.send({success:"Sub Category Created Successfully"})
}

async function subCategoryStatusController (req,res) {
    const {name,status} = req.body
    console.log(name,status)

    if (status == "rejected" || status == "waiting") {
        let updateSubCategory = await SubCategory.findOneAndUpdate({name},{$set:{isActive:false,status}},{new:true})
    
        return res.send({success:"Status Updated"})
    }else if(status == "approved" ){
        let updateSubCategory = await SubCategory.findOneAndUpdate({name},{$set:{isActive:true,status}},{new:true})

        return res.send({success:"Status approved"})
    }

   
}


// =================getAllCategory ================== //

async function getAllCategory(req,res) {
    const data = await Category.find({}).populate("subCategory")
    res.send(data)
}
// =================getAllSubCategory ================== //

async function getAllSubCategory(req,res) {
    const data = await SubCategory.find({}).populate("category")
    res.send(data)
}

module.exports = {createCategoryController,categoryStatusController,createSubCategoryController,subCategoryStatusController,getAllCategory,getAllSubCategory}