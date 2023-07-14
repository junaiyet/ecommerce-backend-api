const express = require('express');
const router = express.Router()
const { secureUpload,createProduct,createVariant } = require('../../controllers/productController');

router.post("/createproduct",secureUpload,createProduct)
router.post("/createvariant",createVariant)




module.exports = router;