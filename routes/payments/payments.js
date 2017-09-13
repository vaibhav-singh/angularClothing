var express = require('express');
var router = express.Router();

var fs = require('fs'),
    path  = require('path')
    ccav = require('./ccavutil'),
    qs = require('querystring'),
    ccavReqHandler = require('./ccavRequestHandler.js'),
    ccavResHandler = require('./ccavResponseHandler.js');

router.post('/ccavRequestHandler', function (request, response){
	ccavReqHandler.postReq(request, response);
});

router.post('/ccavResponseHandler', function (request, response){
        ccavResHandler.postRes(request, response);
});
router.post('/afterPayment', function (request, response){
        res.sendFile(path.join(__dirname + '/../views/index.html'));
});
module.exports = router;