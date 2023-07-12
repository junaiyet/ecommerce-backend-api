const express = require('express');
const router = express.Router()
const { createCategoryController, categoryStatusController,createSubCategoryController, subCategoryStatusController ,getAllCategory,getAllSubCategory} = require('../../controllers/categoryController');
router.post("/createcategory",createCategoryController)
router.post("/categorystatus",categoryStatusController)
router.post("/createsubcategory",createSubCategoryController)
router.post("/subcategorystatus",subCategoryStatusController)
router.get("/allcategory",getAllCategory)
router.get("/allsubcategory",getAllSubCategory)

module.exports = router;