var express = require("express");
var router = express.Router();
var mailService = require('../services/commonServices');

router.get("/test", function(req, response, next) {
    mailService.sendMail("shivanubhateja31@gmail.com", "subject", "mailContent");
    response.send({data: ""})
});

module.exports = router;
