var express = require('express');
var router = express.Router();

var path  = require('path')
var fs = require('fs'),
    path  = require('path')
    ccav = require('./ccavutil'),
    qs = require('querystring'),
    ccavReqHandler = require('./ccavRequestHandler.js'),
    ccavResHandler = require('./ccavResponseHandler');

router.post('/ccavRequestHandler', function (request, response){
	ccavReqHandler.postReq(request, response);
});

router.post('/ccavResponseHandler', function (request, response){
    console.log('response handler')
        ccavResHandler.postRes(request, response);
});
router.post('/success', function (request, res){
    console.log(request.body);
    var request = require("request");

    request(
      {
        uri: "http://localhost/payment/ccavResponseHandler",
        method: "POST",
        form: request.body
      },
      function(error, response, body) {
          console.log("lalalala",response.data);
          console.log("body",body);
          res.write(body);
          res.send();
        // res.sendFile(path.join(__dirname + '/../../views/admin.html'));
      }
    );
    // console.log('response handler',request, response);
        
});
module.exports = router;