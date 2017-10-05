var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccavutil.js'),
    qs = require('querystring');

exports.postReq = function(request,response){
    var body = 'merchant_id=147290&redirect_url=https://www.orangeclips.com/payment/success&cancel_url=https://www.orangeclips.com/payment/failure&',
	workingKey = '43B1F1970CD906CB64390FC1C399385A',	//Put in the 32-Bit key shared by CCAvenues.
	accessCode = 'AVGF72EI98AQ63FGQA',			//Put in the Access Code shared by CCAvenues.
	encRequest = '',
	formbody = '';
				
    request.on('data', function (data) {
	body += data;
    
    var a = data.toString('utf8');
    var JsonRes = JSON.parse('{"' + decodeURI(a).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    encRequest = ccav.encrypt(body,workingKey); 
	
    POST =  qs.parse(body);
	formbody = '<html><head><title>Sub-merchant checkout page</title><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script></head><body><center><!-- width required mininmum 482px --><iframe  width="482" height="500" scrolling="No" frameborder="0"  id="paymentFrame" src="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id='+POST.merchant_id+'&encRequest='+encRequest+'&access_code='+accessCode+':embed=yes"></iframe></center><script type="text/javascript">$(document).ready(function(){$("iframe#paymentFrame").load(function() {window.addEventListener("message", function(e) {$("#paymentFrame").css("height",e.data["newHeight"]+"px"); }, false);}); });</script></body></html>';

	// formbody = '<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';
    });
				
    request.on('end', function () {
        response.writeHeader(200, {"Content-Type": "text/html"});
	response.write(formbody);
	response.end();
    });
   return; 
};
