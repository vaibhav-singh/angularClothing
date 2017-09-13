var mongooseObject = require("../mongooseConfig");


var tempOrdersSchema = mongooseObject.Schema({
    orderId: String,
    cart: [],
    date: Date
});

var placedOrders = mongooseObject.Schema({
    orderId: String, 
    products: [],
    date: Date,
    address: {},
    status: String
})