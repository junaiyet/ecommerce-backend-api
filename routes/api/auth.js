const express = require('express');
const router = express.Router()
const reistrationController = require('../../controllers/reistrationController');
const loginController = require('../../controllers/loginController');
const emailvarificationOtpmatch = require('../../controllers/emailvarificationOtpmatch');
const { becomeMerchant } = require('../../controllers/merchantController');



router.post("/registation", reistrationController)
router.post("/login", loginController)
router.post("/emailvarificationOtpmatch", emailvarificationOtpmatch)
router.post("/becomemerchant", becomeMerchant)


module.exports = router;