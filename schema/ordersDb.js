var mongooseObject = require("../mongooseConfig");


var tempOrdersSchema = mongooseObject.Schema({
    orderId: String,
    cart: [],
    date: Date
});

var placedOrdersSchema = mongooseObject.Schema({
    orderId: String, 
    products: [],
    date: Date,
    address: {},
    status: String
});
module.exports = {
    tempOrderCollection : mongooseObject.model('tempOrders', tempOrdersSchema),
    placedOrdersCollection: mongooseObject.model('placedOrders', placedOrdersSchema)
}