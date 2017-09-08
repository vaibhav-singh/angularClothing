var express = require('express');
var router = express.Router();
var productsDb = require('../schema/productsDb');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname + '/../views/index.html'));
// });



router.get('/fetchProducts', function(req, res){
  console.log("fetchProducts")
  var pageNumber = req.query.pageNo;
  var skipProducts = (pageNumber-1)*6;
  productsDb.productCollection.count({}, function(err, count){
    productsDb.productCollection.find({}, null, {skip: skipProducts, limit:6}, function(err, response){
        if(err){
            res.send({success: false, data: err})
        } else{
            res.send({success: true, products: response, totalCount: count})
        }
    })
  });
});

router.get("/getProductDetails", function(req, res){
    var productid = req.query.id;
    console.log("getDetails Call", productid)
    productsDb.productCollection.findOne({id: productid}, function(err, response){
        console.log(response)
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, productDetails: response});
        }
    });
})

module.exports = router;
