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
  payment_mode: String,
  bank_ref_no: String,
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
    shippedOn: {type: Date, default: new Date()},
    expectedDelivery: {type: Date, default: new Date()},
    couriourName: {type: String, default: "Yet To Ship"},
    tracking_number: {type: String, default: "-"},
    tracking_url: {type: String, default: "yet to ship"}
  }
});
module.exports = {
  tempOrderCollection: mongooseObject.model("tempOrders", tempOrdersSchema),
  placedOrdersCollection: mongooseObject.model("placedOrders", placedOrdersSchema)
};
