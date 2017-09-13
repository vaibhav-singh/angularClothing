angular.module('mainApp').service('productService', ['$http', '$q', function ($http, $q) {
    this.backendUrl = "http://localhost:3000/api"
    this.getproductsToDisplay = function (gender, superCategory, subCategory, src,tagsSelected, pageNo) {
        return $http({
            url: '/api/fetchProducts?tags='+tagsSelected+'&pageNo='+pageNo,
            mehtod:'GET'
        });
    };
    this.getDetailsForProduct = function (productId) {
        return $http({
            method: 'GET',
            url: '/api/getProductDetails?id='+productId
        });
    };
    this.sendRequestForSize = function(contact, productId, size){
        return $http({
            method: "POST",
            url: "/api/saveRequestForSize",
            data:{
                contact: contact,
                productId: productId,
                size: size
            }
        })
    }


    this.fetchTags = function () {
        return $q(function (res, rej) {
            res({
                "tags": ["OrangeClips Select", "Bollywood", "Tollywood", "Humour", "Lazy"]
            })
        })
    };
    this.fetchAvailableSizes = function (productIds) {
        return $http({
            method: "POST",
            url: "/api/fetchAvailableSizes",
            data: {productIds: productIds}
        })
    }
}
])