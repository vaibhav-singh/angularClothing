var express = require('express');
var path  = require('path')
var router = express.Router();
var adminCollections = require('../schema/adminSchemas');
var productsDb = require('../schema/productsDb');
var promoCodesModel = require('../schema/promoCodeSchemaDb');
var ordersDb = require('../schema/ordersDb');

router.post('/login', function(req, res){
    var username = req.body.userName;
    var password = req.body.password;
    if(username === "admn" && password === "adminocpass"){
        res.send({status: true, data: "login Success"})
    } else{
        res.send({status: false, data: 'login failed'})
    }
});
router.post("/addProduct", function(req, res){
    var productDetails = req.body.productDetails;
    productDetails.updatedAt = new Date();
    var toSave = new productsDb.productCollection(productDetails);
    toSave.save(function(err, response){
        if(err){
            res.send({success: false, data: err})
        } else{
            res.send({success: true, data: response})
        }
    })
});
router.post("/deleteProduct", function(req, res){
    var productDetails = req.body.productDetails;
    productsDb.productCollection.remove({id: productDetails.id}, function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, data: "deleted"})
        }
    })
});
router.post("/updateProduct", function(req, res){
    var productDetails = req.body.productDetails;
    productDetails.updatedAt = new Date();
    delete productDetails._id;
    productsDb.productCollection.findOne({id: productDetails.id}, function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            for(var index in productDetails){
                response[index] = productDetails[index];
            }
            response.save(function(err, saveResponse){
                if(err){
                    res.send({success: false, data: err});
                } else{
                    res.send({success: true, data: saveResponse})
                }
            });
        }
    })
});
router.post("/saveChangesInOrder", function(req, res){
    var orderDetails = req.body.orderDetails;
    delete orderDetails._id;
    ordersDb.placedOrdersCollection.findOne({orderId: orderDetails.orderId}, function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            for(var index in orderDetails){
                response[index] = orderDetails[index];
            }
            response.save(function(err, saveResponse){
                if(err){
                    res.send({success: false, data: err});
                } else{
                    res.send({success: true, data: saveResponse})
                }
            });
        }
    })
});
router.get("/fetchProducts", function(req, res){
    var pageNumber = req.query.pageNumber;
    var skipProducts = pageNumber*10;
    productsDb.productCollection.find({}, null, {skip: skipProducts, limit:10, sort:{updatedAt: -1}}, function(err, response){
        if(err){
            res.send({success: false, data: err})
        } else{
            res.send({success: true, products: response})
        }
    })
});
router.get('/orders', function(req, res){
    var pageNumber = req.query.pageNumber;
    var skipOrders = pageNumber*10;
    ordersDb.placedOrdersCollection.find({}, null, {skip: skipOrders, limit: 10, sort: {date: -1}}, function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, orders: response});
        }
    })
});
router.get('/fetchProductDetails', function(req, res){
    var id = req.query.id;
    productsDb.productCollection.findOne({id: id}, function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, productDetails: response});
        }
    })
})
router.get('/fetchAllPromoCodes', function(req, res){
    promoCodesModel.find({}, function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, promoCodes: response});
        }
    })
})
router.get('/deletePromoCodes', function(req, res){
    var code = req.query.code;
    promoCodesModel.remove({code: code}, function(err, response){
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, promoCodes: response});
        }
    })
})
router.post('/addPromoCode', function(req, res){
    var details = req.body.promoDetails;
    var toSave = new promoCodesModel(details);
    toSave.save((err, response) => {
        if(err){
            res.send({success: false, data: err});
        } else{
            res.send({success: true, details: details});
        }
    })
})
/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/admin.html'));
});
module.exports = router;
