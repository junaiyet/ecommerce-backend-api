const express = require('express');
const router = express.Router()
const { secureUpload,createProduct } = require('../../controllers/productController');

router.post("/createproduct",secureUpload,createProduct)




module.exports = router;