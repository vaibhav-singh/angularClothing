// email service
var nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "help.orangeclips@gmail.com",
    // refreshToken: "1/UO04dRKQL362VMd1CVppoPTGgRiY1DFpD_W2hVsZqW9402tx2zmXk21lwSRa2Pss",
    refreshToken: "1/KyYwU9iqOP6zkiK9nBgPDFLVJvZCd1fXdBvK7B1NBcg",
    accessToken: "ya29.Glt0BQ77yLCl8fIhNGTO0Ff0V5iD0QZ8UOLC0kpWWmK7p05XmgpG9rHlYr8R3f38DT29fh6-5qBJvae3hbAcfUI-aKbwGp9aPxGrzykyURqHwnY2aDQnBPQdFTAs",
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
      console.log(error)
    } 
    else{
      console.log("sent")
    } 
  });
};
