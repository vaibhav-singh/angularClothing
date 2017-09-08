angular.module('mainAdminApp').service('adminServices', function($http){
    this.backendUrl = 'http://localhost:3000/admin'
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
    this.fetchProductDetails = function(id){
        return $http({
            method: "GET",
            url: this.backendUrl+'/fetchProductDetails?id='+id
        });
    }
})