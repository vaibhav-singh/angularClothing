var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  qs = require("querystring");
path = require("path");
ordersDb = require("./../../schema/ordersDb");
productsDb = require("./../../schema/productsDb");

function readModuleFile(path, callback) {
  try {
    var filename = require.resolve(path);
    fs.readFile(filename, "utf8", callback);
  } catch (e) {
    callback(e);
  }
}

exports.postRes = function(request, response) {
  console.log("handle innnn");
  var ccavEncResponse = "",
    ccavResponse = "",
    workingKey = "43B1F1970CD906CB64390FC1C399385A", //Put in the 32-Bit key shared by CCAvenues.
    ccavPOST = "";

  request.on("data", function(data) {
    ccavEncResponse += data;
    ccavPOST = qs.parse(ccavEncResponse);
    var encryption = ccavPOST.encResp;
    ccavResponse = ccav.decrypt(encryption, workingKey);
    console.log("from data->>>" + ccavResponse);
  });

  request.on("end", function() {
    // var pData = '';
    // pData = '<table border=1 cellspacing=2 cellpadding=2><tr><td>'
    // pData = pData + ccavResponse.replace(/=/gi,'</td><td>')
    // pData = pData.replace(/&/gi,'</td></tr><tr><td>')
    // pData = pData + '</td></tr></table>'
    // htmlcode = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Response Handler</title></head><body><center><font size="4" color="blue"><b>Response Page</b></font><br>'+ pData +'</center><br></body></html>';
    // response.writeHeader(200, {"Content-Type": "text/html"});
    // response.write(htmlcode);
    // var responseArray = ccavResponse.split("&");
    var JsonRes = JSON.parse(
      '{"' +
        decodeURI(ccavResponse)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    console.log(JsonRes);
    if (JsonRes.order_status !== "Success") {
      // remove from temp orders and add to orders
      readModuleFile(path.join(__dirname + "/../../views/paymentResponseSuccess.html"), function(err, content) {
        content = content.replace("#orderId#", JsonRes.order_id);
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(content);
        // response.sendFile(path.join(__dirname + '/../../views/paymentResponseSuccess.html'));
      });
    } else {
      // failure
      // get temp order and increase quantity of product
      ordersDb.tempOrderCollection.findOne({ orderId: JsonRes.order_id }, function(err, tempOrder){
		  if(err){

		  } else{
			var details = tempOrder;
			for (var i = 0; i < details.products.length; i++) {
				// productIdsArray.push(details.products[i].productId);
				(function(i) {
				productsDb.productCollection.findOne({ id: details.products[i].productId }, function(err, response) {
					if (err) {
					res.send({ success: false, details: err });
					} else {
					response.sizes[details.products[i].size] = response.sizes[details.products[i].size] + details.products[i].quantity;
					response.save(function(err, success) {
						if (err) {
						res.send({ success: false, details: err });
						} else {
						//   continue;
						}
					});
					}
				});
				})(i);
			}
		  }
	  });
      response.sendFile(path.join(__dirname + "/../../views/paymentResponseFailed.html"));
    }
    // response.end();
  });
};
