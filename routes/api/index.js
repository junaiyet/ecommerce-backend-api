const express = require('express')
const router = express.Router()
const authRoutes = require("./auth")
const categoryRoutes = require("./category")
const productRoutes = require("./product")
const marchantRoutes = require("./merchant")


router.use("/auth",authRoutes);
router.use("/category",categoryRoutes);
router.use("/marchant",marchantRoutes);
router.use("/product",productRoutes);

module.exports =router;