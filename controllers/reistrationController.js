const emailValidation = require('../helpers/emailValidation')
const User = require("../models/usersModel.js")
const bcrypt = require('bcrypt');
const otpTemplate = require("../helpers/otpTemplate.js")
const sendEmail = require("../helpers/sendEmail.js")
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

    let  reistrationController =   async(req,res)=>{
        const {fullName,email,password,avatar,facbookId,linkedinId} = req.body
        
        if (!fullName) {
           return res.send({error:"Enter Full Name"})
        }else if (!email) {
           return res.send({error:"Enter Full Email"})
        }else if (!emailValidation(email)) {
           return res.send({error:"Enter a valid email"})
        }
        else if (!password) {
           return res.send({error:"Enter Full Password"})
        }else{
           let duplicateEmial = await User.find({email:email})
     
           if (duplicateEmial.length> 0) {
              return res.send({error:"Enter Already Exist. Try another"})
           }
     
           bcrypt.hash(password, 10, async function(err, hash) {
              const user = new User({
                 fullName,
                 email,
                 password:hash
              })
     
              user.save()
              const generator2 = aleaRNGFactory(Date.now());
              let randomNumber= generator2.uInt32().toString().substring(0,4)
              
              let randomOtpStore =await  User.findOneAndUpdate(
               {email},
               {$set:{randomOtp:randomNumber}},
               {new:true}
               )
              
              sendEmail(email,randomNumber,otpTemplate)
//OTP DELETE
            //   setTimeout(async function () {
            //    console.log("OTP Deleted")

            //    let randomOtpStore =await  User.findOneAndUpdate(
            //       {email},
            //       {$unset:{randomOtp:""}},
            //       {new:true}
            //       );
            //   },60000)
     
              res.send({
                 success:"Registation Successfully, Please Check Your Email",
                 fullName:user.fullName,
                 email:user.email
              })
     
          });
     
           // return res.send({success:"Registation Successfully!"})
        }
     }

     module.exports = reistrationController;