angular.module('mainAdminApp').service('adminServices', function($http){
    this.backendUrl = '/adminVeera'
    this.login = function(loginCredentials){
        return $http({
            method: "POST",
            url: this.backendUrl+'/login',
            data: loginCredentials
        });
    };
    // product related
    this.addProduct = function(productDetails){
        return $http({
            method: "POST",
            url: this.backendUrl+"/addProduct",
            data: {productDetails: productDetails}
        });
    };
    // product related
    this.deleteProduct = function(productDetails){
        return $http({
            method: "POST",
            url: this.backendUrl+"/deleteProduct",
            data: {productDetails: productDetails}
        });
    };
    this.updateProduct = function(productDetails){
        return $http({
            method: "POST",
            url: this.backendUrl+"/updateProduct",
            data: {productDetails: productDetails}
        });
    };
    this.fetchProducts = function(pageNumber){
        return $http({
            method: "GET",
            url :this.backendUrl+'/fetchProducts?pageNumber='+pageNumber
        });
    };
    this.fetchOrders = function(pageNumber){
        return $http({
            method: "GET",
            url: this.backendUrl+'/orders?pageNumber='+pageNumber
        })
    }
    this.fetchProductDetails = function(id){
        return $http({
            method: "GET",
            url: this.backendUrl+'/fetchProductDetails?id='+id
        });
    }
    this.saveChangesInOrder = function(order){
        return $http({
            method: "POST",
            url: this.backendUrl+'/saveChangesInOrder',
            data: {orderDetails: order}
        })
    }
    this.fetchAllPromoCodes = function(order){
        return $http({
            method: "GET",
            url: this.backendUrl+'/fetchAllPromoCodes',
        })
    }
    this.deletePromoCode = function(code){
        return $http({
            method: "GET",
            url: this.backendUrl+'/deletePromoCodes?code='+code,
        })
    }
    this.addPromoCode = function(promoDetails){
        return $http({
            method: "POST",
            url: this.backendUrl+'/addPromoCode',
            data: {promoDetails: promoDetails}
        })
    }
})