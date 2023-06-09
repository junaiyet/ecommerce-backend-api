const User = require("../models/usersModel.js")
const bcrypt = require('bcrypt');
const emailValidation = require("../helpers/emailValidation.js")
let loginController = async (req,res)=>{
    let {email,password} = req.body
   
    console.log(email,password);

    if (!email) {
        return res.send({error:"Enter Full Email"})
     }else if (!emailValidation(email)) {
        return res.send({error:"Enter a valid email"})
     }
     else if (!password) {
        return res.send({error:"Enter Password"})
     }else{
        let isEmailExist = await User.find({email})

        if (isEmailExist.length > 0) {
            bcrypt.compare(password, isEmailExist[0].password)
            .then( function( result) {
                if (result) {
                    res.send({
                        success:"Login Successfully!",
                        fullName:isEmailExist.fullName,
                        email:isEmailExist.email
                     })
                }else{
                    res.json({error:"Password Not Match"})  
                }
            });
        }else{
            res.json({error:"Email Not Match"})
        }
     }

}

module.exports = loginController