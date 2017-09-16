angular.module("mainApp").service("CommonServices", [
  "$q",
  "$http",
  function($q, $http) {
    this.hideToggleMenu = function() {
      if ($(".navbar-toggle.collapsed").length <= 0) {
        $(".navbar-toggle").click(); //bootstrap 2.x
      }
    };
    this.getOrderStatus = function(orderId) {
  //   return $q(function(resolve, request) {
    //     resolve({
    //       orderId: "123456",
    //       products: [
    //         {
    //           productId: 121471,
    //           quantity: 1,
    //           size: "L",
    //           productDetails: {
    //             id: 121471,
    //             name: "Af Half Sleeve T-Shirt",
    //             description: "<p>Everything is said better with a printed edit.Thank God we have this men&#8217;s printed half sleeve T-shirt in for you! We think this one will fit right into your on-trend wardrobe. You think so too? Well, time to get your hands on one!</p>",
    //             url: "af-half-sleeve-t-shirt-for-men",
    //             meta_title: "AF T-Shirt - AF Mens T-Shirts@Best Price India - Bewakoof.com",
    //             meta_description: "Buy AF Mens T-Shirts Online at ₹ 499 on Bewakoof.com. Shop from wide range of Men's Printed T-Shirts Collection. Get Free Shipping, COD & Easy Returns! Shop Now!",
    //             meta_keywords: null,
    //             price: 499,
    //             weight: 100,
    //             status: "enabled",
    //             product_description: "",
    //             model_description: "",
    //             fit: "Regular Fit",
    //             fit_description: "Fits just right - not too tight, not too loose.",
    //             material_filter_details: "<b>Regular Fit </b>\n Fits just right - not too tight, not too loose.",
    //             delivery_and_return_policy: "Free Shipping above &#8377; 1000\n\nCOD charges applicable. Please, refer <a href='/faq' style='color:inherit;'>FAQ</a> for more information.\n\nAll products, except boxers and nightwear shorts, are applicable for return.\n\nCustomers can return their order within 15 days of the order delivery.\n\nRefunds for returned products will be given in your Bewakoof wallet.",
    //             limited_edition: false,
    //             canonical_url: null,
    //             mrp: 499,
    //             dispatch_days: "2-4",
    //             updated_at: "16 Aug 2017",
    //             launched_at: "Jul 11 2017",
    //             sort_by_new: 1499771741,
    //             parent_category: { id: 13, name: "Men's T-Shirts", url: "men-t-shirts" },
    //             child_categories: [{ id: 160, name: "Men's Printed T-Shirts", url: "printed-t-shirts-for-men" }],
    //             category_info: { cat_type: "Apparel", subtype: "Topwear", gender: "Men", subclass: "T-Shirt", sleeve: "Half Sleeve", fabric: "Single Jersey", brand: "-1", model: "-1", is_printed: "y" },
    //             images: {
    //               original: [{ id: 612407, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg" }],
    //               display: [{ id: 612407, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg" }],
    //               additional: [{ id: 612409, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769705.jpg", $$hashKey: "object:47" }, { id: 612411, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769707.jpg", $$hashKey: "object:48" }, { id: 612413, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769710.jpg", $$hashKey: "object:49" }, { id: 612415, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769713.jpg", $$hashKey: "object:50" }]
    //             },
    //             is_gift_card: 0,
    //             gift_card_occasions: [],
    //             cod_enable: 1,
    //             breadCrumb: [{ name: "T-Shirts", url: "men-t-shirts" }, { name: "Printed T-Shirts", url: "men-printed-t-shirts" }],
    //             product_type: "garment",
    //             sizes: [{ id: 1, name: "S", product_size_id: 185993, qty_avail: 13 }, { id: 2, name: "M", product_size_id: 185995, qty_avail: 23 }, { id: 3, name: "L", product_size_id: 185997, qty_avail: 39 }, { id: 4, name: "XL", product_size_id: 185999, qty_avail: 76 }, { id: 5, name: "2XL", product_size_id: 186001, qty_avail: 54 }, { id: 18, name: "3XL", product_size_id: 186003, qty_avail: 0 }],
    //             in_stock: 1,
    //             notify_me_message: "SELECT FROM UNAVAILABLE SIZES",
    //             color: { id: 738, name: "GREY 17" },
    //             tabular_description: { fit_description: { name: "FIT DETAILS", text: "Regular Fit: Take your usual size\n\n" }, description: { name: "FEATURES", text: "<p>Everything is said better with a printed edit.Thank God we have this men&#8217;s printed half sleeve T-shirt in for you! We think this one will fit right into your on-trend wardrobe. You think so too? Well, time to get your hands on one!</p>" }, fabric_detail: { name: "FABRIC DETAILS", text: "<b>Fabric</b>\n100% cotton\nSingle jersey\nPrewashed to impart a softer texture\n\n<b>WashCare Instructions</b>\n\nMachine wash cold\n\nDo not bleach or wash with chlorine based detergent or water\n\nWash/dry inside out\n\nDo not iron directly on prints\n\nDry promptly in shade\n\nDry on a flat surface as hanging may cause measurement variations\n\nProduct color may vary little due to photography \n\nWash with similar clothes\n\n<a href='/faq?query=washcare' style='color:inherit;'>Know more</a>\n", image: [] }, delivery_info: { name: "DELIVERY & RETURN INFO", text: "Free Shipping above &#8377; 1000\n\nCOD charges applicable. Please, refer <a href='/faq' style='color:inherit;'>FAQ</a> for more information.\n\nAll products, except boxers and nightwear shorts, are applicable for return.\n\nCustomers can return their order within 15 days of the order delivery.\n\nRefunds for returned products will be given in your Bewakoof wallet." } },
    //             cod_statement: "",
    //             offer_statement: ""
    //           }
    //         },
    //         {
    //           productId: 121471,
    //           quantity: 1,
    //           size: "M",
    //           productDetails: { id: 121471, name: "Af Half Sleeve T-Shirt", description: "<p>Everything is said better with a printed edit.Thank God we have this men&#8217;s printed half sleeve T-shirt in for you! We think this one will fit right into your on-trend wardrobe. You think so too? Well, time to get your hands on one!</p>", url: "af-half-sleeve-t-shirt-for-men", meta_title: "AF T-Shirt - AF Mens T-Shirts@Best Price India - Bewakoof.com", meta_description: "Buy AF Mens T-Shirts Online at ₹ 499 on Bewakoof.com. Shop from wide range of Men's Printed T-Shirts Collection. Get Free Shipping, COD & Easy Returns! Shop Now!", meta_keywords: null, price: 499, weight: 100, status: "enabled", product_description: "", model_description: "", fit: "Regular Fit", fit_description: "Fits just right - not too tight, not too loose.", material_filter_details: "<b>Regular Fit </b>\n Fits just right - not too tight, not too loose.", delivery_and_return_policy: "Free Shipping above &#8377; 1000\n\nCOD charges applicable. Please, refer <a href='/faq' style='color:inherit;'>FAQ</a> for more information.\n\nAll products, except boxers and nightwear shorts, are applicable for return.\n\nCustomers can return their order within 15 days of the order delivery.\n\nRefunds for returned products will be given in your Bewakoof wallet.", limited_edition: false, canonical_url: null, mrp: 499, dispatch_days: "2-4", updated_at: "16 Aug 2017", launched_at: "Jul 11 2017", sort_by_new: 1499771741, parent_category: { id: 13, name: "Men's T-Shirts", url: "men-t-shirts" }, child_categories: [{ id: 160, name: "Men's Printed T-Shirts", url: "printed-t-shirts-for-men" }], category_info: { cat_type: "Apparel", subtype: "Topwear", gender: "Men", subclass: "T-Shirt", sleeve: "Half Sleeve", fabric: "Single Jersey", brand: "-1", model: "-1", is_printed: "y" }, images: { original: [{ id: 612407, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg" }], display: [{ id: 612407, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769702.jpg" }], additional: [{ id: 612409, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769705.jpg", $$hashKey: "object:101" }, { id: 612411, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769707.jpg", $$hashKey: "object:102" }, { id: 612413, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769710.jpg", $$hashKey: "object:103" }, { id: 612415, name: "af-half-sleeve-t-shirt-men-s-printed-t-shirts-1499769713.jpg", $$hashKey: "object:104" }] }, is_gift_card: 0, gift_card_occasions: [], cod_enable: 1, breadCrumb: [{ name: "T-Shirts", url: "men-t-shirts" }, { name: "Printed T-Shirts", url: "men-printed-t-shirts" }], product_type: "garment", sizes: [{ id: 1, name: "S", product_size_id: 185993, qty_avail: 13 }, { id: 2, name: "M", product_size_id: 185995, qty_avail: 23 }, { id: 3, name: "L", product_size_id: 185997, qty_avail: 39 }, { id: 4, name: "XL", product_size_id: 185999, qty_avail: 76 }, { id: 5, name: "2XL", product_size_id: 186001, qty_avail: 54 }, { id: 18, name: "3XL", product_size_id: 186003, qty_avail: 0 }], in_stock: 1, notify_me_message: "SELECT FROM UNAVAILABLE SIZES", color: { id: 738, name: "GREY 17" }, tabular_description: { fit_description: { name: "FIT DETAILS", text: "Regular Fit: Take your usual size\n\n" }, description: { name: "FEATURES", text: "<p>Everything is said better with a printed edit.Thank God we have this men&#8217;s printed half sleeve T-shirt in for you! We think this one will fit right into your on-trend wardrobe. You think so too? Well, time to get your hands on one!</p>" }, fabric_detail: { name: "FABRIC DETAILS", text: "<b>Fabric</b>\n100% cotton\nSingle jersey\nPrewashed to impart a softer texture\n\n<b>WashCare Instructions</b>\n\nMachine wash cold\n\nDo not bleach or wash with chlorine based detergent or water\n\nWash/dry inside out\n\nDo not iron directly on prints\n\nDry promptly in shade\n\nDry on a flat surface as hanging may cause measurement variations\n\nProduct color may vary little due to photography \n\nWash with similar clothes\n\n<a href='/faq?query=washcare' style='color:inherit;'>Know more</a>\n", image: [] }, delivery_info: { name: "DELIVERY & RETURN INFO", text: "Free Shipping above &#8377; 1000\n\nCOD charges applicable. Please, refer <a href='/faq' style='color:inherit;'>FAQ</a> for more information.\n\nAll products, except boxers and nightwear shorts, are applicable for return.\n\nCustomers can return their order within 15 days of the order delivery.\n\nRefunds for returned products will be given in your Bewakoof wallet." } }, cod_statement: "", offer_statement: "" }
    //         }
    //       ],
    //       paymentStatus: "Paid",
    //       status: "Success",
    //       shipped: false,
    //       orderedBy: {
    //         name: "kaka",
    //         emailId: "kaka@kaka.com"
    //       },
    //       deliveryDetails: {
    //         addressLine: "address",
    //         city: "city",
    //         state: "state",
    //         country: "country",
    //         pinCode: 1234,
    //         preferredTiming: "asd"
    //       },
    //       shippingDetails: {
    //         shippedOn: new Date(),
    //         expectedDelivery: new Date(),
    //         couriourName: "name",
    //         tracking_number: 213434,
    //         tracking_url: ""
    //       },
    //       totalAmount: 123
    //     });
//   });
    return $http({
      method: "GET",
      url: '/api/getOrderDetails?orderId='+orderId
    });
};
  }
]);
