// email service
var nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
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
    html: mailContent, // html body
    auth: {
      user: "help.orangeclips@gmail.com",
      refreshToken: "1/itxDTganF9gUCttFugwsd-HSP3UfKlPB4WvMmcByOqI",
      accessToken: "ya29.Glt0Be_Priud_yEkSdohK9607q4tKrEYIGk3n4ekTKBU8Y1Rc0IqNtd05J3KzqEUs90ytr6K8F4XEqNGi-UlYqAPuXBdTpzsbNaBL_UFkscKdvgxjL-NHGRO46f3",   
      expires      : 1494388182480
    }
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
