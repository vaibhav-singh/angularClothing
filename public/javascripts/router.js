angular.module('mainApp').config(['$stateProvider','$locationProvider',function($stateProvider, $locationProvider){
    $stateProvider.state({
        name: 'homePage',
        url:'/',
        templateUrl: './html/homePage.html'
    });
    $stateProvider.state({
        name: 'products',
        url:'/products?gender&superCategory&subCategory&src',
        templateUrl: './html/products.html'
    });
    $stateProvider.state({
        name: 'productDetails',
        url:'/productDetails/:productId',
        templateUrl: './html/productDetails.html'
    });
    $stateProvider.state({
        name: 'cartDetails',
        url:'/cartDetails',
        templateUrl: './html/cartDetails.html'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}])