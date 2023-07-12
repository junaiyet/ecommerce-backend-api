const nodemailer = require("nodemailer");

async function sendEmail(email,verify,template) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "junaiyetmia.jm.bd@gmail.com", 
          pass: "dxfgdqanjtsvzjda", 
        },
      });
    

      let info = await transporter.sendMail({
        from: "junaiyetmia.jm.bd@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Please Varify Your Email", // Subject line
        html: template(verify), // html body
      });
}

module.exports = sendEmail;