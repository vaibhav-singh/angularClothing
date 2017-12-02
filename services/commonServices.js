// email service
var nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "help.orangeclips@gmail.com",
    refreshToken: "1/UO04dRKQL362VMd1CVppoPTGgRiY1DFpD_W2hVsZqW9402tx2zmXk21lwSRa2Pss",
    accessToken: "ya29.GlvNBFrhxJtfI1DO7ajH9vf0YkiYS_BtZvqhaih3Zy7fO3n821YK3QASF3raS2EkqTVYs_uvIVzGHnqAqp24rDMqv0R_WucbOGPwZWOizy48r5ogdAj9WiTEmRwK",
    clientId: "659815666715-ke8hhc7aqbaago8ehr90f8a7svj6v9tk.apps.googleusercontent.com",
    clientSecret: "ugwyEa-wW4l6kvQJ1nROM6vY"
  }
});
exports.sendMail = function(sendMailTo, subject, mailContent) {
     var mailOptions = {
    from: " <contact@orangeclips.com>", // sender address
    to: sendMailTo, // list of receivers
    subject: subject+" ✔", // Subject line
    text: "Email", // plaintext body
    html: mailContent // html body
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error){
    } 
    else{
      // console.log("sent")
    } 
  });
};
