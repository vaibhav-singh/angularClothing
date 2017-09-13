var express = require('express');
var router = express.Router();
var productsDb = require('../schema/productsDb');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname + '/../views/index.html'));
// });

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
        productsDb.productCollection.find({'categoryInfo.filters' : {$in: tagsArray}}, null, {skip: skipProducts, limit:6}, function(err, response){
            if(err){
                res.send({success: false, data: err})
            } else{
                res.send({success: true, products: response, totalCount: count})
            }
        })
    });
} else{
    productsDb.productCollection.count({}, function(err, count){
        productsDb.productCollection.find({}, null, {skip: skipProducts, limit:6}, function(err, response){
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
router.post("/fetchAvailableSizes", function(req, res){
    console.log('afa')
    var productidArray = req.body.productIds;
    productsDb.productCollection.find({id: {$in:productidArray}}, 'id sizes',function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, result: response, total: response.length});
        }
    });
});

module.exports = router;
