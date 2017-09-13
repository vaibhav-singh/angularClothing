angular.module("mainApp").service("cartRelatedServices", [
  "$http",
  function($http) {
    this.cartDetails = [];
    this.saveCart = function(cart) {
      this.cartDetails = cart;
    };
    this.makePayment = function(cart, address, total) {
      payload = $.param({
        merchant_id: 147290,
        order_id: "12"+ new Date(),
        currency: "INR",
        amount: 123,
        redirect_url: "https://www.orangeclips.com",
        cancel_url: "https://www.orangeclips.com",
        language: "en"
      });
      return $http({
        method: "POST",
        url: "/payment/ccavRequestHandler",
        data: payload,
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8;" }
      });
    };
    this.saveTempOrder = function(cart, address, total) {
      return $http({
        method: "POST",
        url: "/api/saveTempOrder",
        data: {
          details: {
            cart: cart,
            address: address,
            total: total,
            time: new Date()
          }
        }
      });
    };
    // this.addProductToCart = function(product){
    //     // check if product is already there, if not add it , else increase quantity
    //     for(var i=0; i<cartDetails.length; i++){
    //         if(cartDetails[i].productId === product.productId){
    //             cartDetails[i].quantity += product.quantity;
    //             console.log(this.cartDetails);
    //             return true;
    //         } else{
    //             continue;
    //         }
    //     }
    //     this.cartDetails.push(product);
    // };
    this.changeQuantityOfProductInCart = function(product, typeOfChange) {
      // check if product is already there, if not add it , else change quantity
      for (var i = 0; i < this.cartDetails.length; i++) {
        if (this.cartDetails[i].productId === product.productId && this.cartDetails[i].size === product.size) {
          if (typeOfChange === "+") this.cartDetails[i].quantity += product.quantity;
          else this.cartDetails[i].quantity -= product.quantity;
          if (this.cartDetails[i].quantity === 0) {
            this.cartDetails[i].quantity.splice(i, 1);
          }
          localStorage.setItem("cartDetails", JSON.stringify(this.cartDetails));
          return true;
        } else {
          continue;
        }
      }
      // add product
      this.cartDetails.push(product);
      localStorage.setItem("cartDetails", JSON.stringify(this.cartDetails));
      return true;
    };
    this.removeProduct = function(product) {
      this.cartDetails = this.cartDetails.filter(function(item) {
        return item.productId !== product.productId || item.size !== product.size;
      });
      localStorage.setItem("cartDetails", JSON.stringify(this.cartDetails));
    };
  }
]);
