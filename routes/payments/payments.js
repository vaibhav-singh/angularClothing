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
router.post('/success', function (request, response){
    console.log('response handler',request, response);
        
  res.sendFile(path.join(__dirname + '/../views/admin.html'));
});
module.exports = router;