var express = require('express');
var http = require('http');
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
    
    
    var str = '';

  var options = {
    host: 'https://www.orangeclips.com',
    path: '/payment/ccavResponseHandler',
    method:"POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded;charset=utf-8;" }
  };

  var callback = function(response) {
    response.on('data', function (chunk) {
        console.log('asdasd')
      str += chunk;
    });

    response.on('end', function () {
      console.log(str);
      res.send(str); // SEND ACTUAL RESPONSE HERE
    });
  }
    req = http.request(options, callback);
    req.end();
    // console.log('response handler',request, response);
        
});
module.exports = router;