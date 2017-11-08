var mongooseObject = require("../mongooseConfig");

var promoCodeSchema = mongooseObject.Schema({
    code: {type: String,  unique: true}, 
    reducePriceMethod: String,                  // amount or percentage
    minimumCartAmount: Number,
    reduceAmount: Number                        // percent or amount to be reduced
});

module.exports = mongooseObject.model("promoCodes", promoCodeSchema);