var express = require('express');
var router = express.Router();
var fs = require('fs'),
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
module.exports = router;