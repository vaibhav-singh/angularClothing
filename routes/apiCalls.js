var express = require('express');
var router = express.Router();
var shortid = require('shortid')
var productsDb = require('../schema/productsDb');
var ordersDb = require('../schema/ordersDb');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname + '/../views/index.html'));
// });
  var removeEntryFromTempOrder = function(id){
    ordersDb.tempOrderCollection.remove({orderId: id}, function(){})
  }
  var revertSizesInProducts = function(details, i, res) {
    productsDb.productCollection.findOne({ id: details.products[i].productId }, function(err, response) {
      if (err) {
        res.send({ success: false, details: err });
      } else {
        response.sizes[details.products[i].size] = response.sizes[details.products[i].size] + details.products[i].quantity;
        console.log("quantity reverted")
        response.save(function(err, success) {
          if (err) {
            res.send({ success: false, details: err });
          } else {
            //   continue;
          }
        });
      }
    });
  };
router.post('/saveRequestForSize', function(req, res){
    var details = {};
    details.contact = req.body.contact;
    details.productId = req.body.productId;
    details.size = req.body.size;
    var newRequest = new productsDb.requestedProductsCollection(details);

    newRequest.save(function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, data: "success"})
        }
    })
})

router.get('/fetchProducts', function(req, res){
  var tags = req.query.tags;
  var pageNumber = req.query.pageNo;
  var skipProducts = (pageNumber-1)*6;
  if(tags === 'undefined'){
      var tagsArray = [];
  } else{
      var tagsArray = tags.split(',');
  }
  if(tagsArray.length>0){
        productsDb.productCollection.count({'categoryInfo.filters' : {$in: tagsArray}}, function(err, count){
        productsDb.productCollection.find({'categoryInfo.filters' : {$in: tagsArray}}, null, {skip: skipProducts, limit:6, sort:{updatedAt: -1}}, function(err, response){
            if(err){
                res.send({success: false, data: err})
            } else{
                res.send({success: true, products: response, totalCount: count})
            }
        })
    });
} else{
    productsDb.productCollection.count({}, function(err, count){
        productsDb.productCollection.find({}, null, {skip: skipProducts, limit:6, sort:{updatedAt: -1}}, function(err, response){
            if(err){
                res.send({success: false, data: err})
            } else{
                res.send({success: true, products: response, totalCount: count})
            }
        })
    });
}
});
router.get("/getProductDetails", function(req, res){
    var productid = req.query.id;
    productsDb.productCollection.findOne({id: productid}, function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, productDetails: response});
        }
    });
});
router.get('/getOrderDetails', function(req, res){
    var orderId = req.query.orderId;
    ordersDb.placedOrdersCollection.find({orderId: orderId}, function(err, order){
        if(err){
            res.send({success: false, response: err});
        } else{
            res.send({success: true, orderDetails: order}); 
        }
    })
})
router.post("/fetchAvailableSizes", function(req, res){
    var productidArray = req.body.productIds;
    productsDb.productCollection.find({id: {$in:productidArray}}, 'id sizes',function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, result: response, total: response.length});
        }
    });
});
router.post('/saveTempOrder', function(req, res){
    var details = req.body.details;
    shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
    details.orderId = shortid.generate();
    var saveIt = ordersDb.tempOrderCollection(details);
    // var productIdsArray = [];
    // console.log(details.products)
    for (var i = 0; i < details.products.length; i++) {
        // productIdsArray.push(details.products[i].productId);
        (function(i){
            productsDb.productCollection.findOne({id: details.products[i].productId}, function(err, response){
                if(err){
                    res.send({success: false, details: err});
                } else{
                    response.sizes[details.products[i].size] = response.sizes[details.products[i].size] - details.products[i].quantity;
                    response.save(function(err, success) {
                    if (err) {
                        res.send({ success: false, details: err });
                    } else {
                        //   continue;
                    }
                    });
                }
            });
        }(i))
    }
    saveIt.save(function(err, response){
        if (err) {
          res.send({ success: false, response: err });
        } else {
            console.log("tempOrder saved");
            // timeout
          (function(orderId) {
            //   1200000
            setTimeout(function() {
              ordersDb.tempOrderCollection.findOne({ orderId: orderId }, function(err, tempOrder) {
                if (err) {
                } else {
                  var details = tempOrder;
                  if (details !== null) {
                    for (var i = 0; i < details.products.length; i++) {
                      (function(i) {
                        revertSizesInProducts(details, i, res);
                        if (i === details.products.length - 1) {
                          removeEntryFromTempOrder(orderId);
                        }
                      })(i);
                    }
                  } 
                }
              });
            }, 1800000);
          })(details.orderId);
          // timeout ends
          res.send({ success: true, response: response });
        }
    });
});
module.exports = router;
