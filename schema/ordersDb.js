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
  address: {},
  status: String,
  paymentStatus: String,
  orderStatus: String,
  shipped: Boolean,
  orderedBy: {
    name: String,
    emailId: String
  },
  deliveryDetails: {
    address: String,
    city: String,
    state: String,
    country: String,
    pinCode: Number,
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
