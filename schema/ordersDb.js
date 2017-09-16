var mongooseObject = require("../mongooseConfig");

var tempOrdersSchema = mongooseObject.Schema({
  orderId: String,
  products: [],
  date: Date
});

var placedOrdersSchema = mongooseObject.Schema({
  orderId: String,
  products: [],
  date: Date,
  amount: String,
  paymentStatus: String,
  orderStatus: {type: String, default: "processing"},
  shipped: {type:Boolean, default: false},
  tracking_id_payment: String,
  orderedBy: {
    name: String,
    emailId: String,
    phoneNo: String
  },
  deliveryDetails: {
    address: String,
    city: String,
    state: String,
    country: String,
    pinCode: String,
    preferredTiming: String
  },
  shippingDetails: {
    shippedOn: Date,
    expectedDelivery: Date,
    couriourName: String,
    tracking_number: Number,
    tracking_url: String
  }
});
module.exports = {
  tempOrderCollection: mongooseObject.model("tempOrders", tempOrdersSchema),
  placedOrdersCollection: mongooseObject.model("placedOrders", placedOrdersSchema)
};
