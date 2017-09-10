angular.module('mainApp').config(['$stateProvider','$locationProvider', '$urlRouterProvider',function($stateProvider, $locationProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
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
    $stateProvider.state({
        name: 'checkout',
        url:'/checkout/:src',
        templateUrl: './html/checkOut.html'
    });
    $stateProvider.state({
        name: 'orderStatus',
        url: '/orderStatus?orderId',
        templateUrl: './html/orderStatus.html'
    });
    $stateProvider.state({
        name: 'terms',
        url:'/terms',
        templateUrl: './html/terms.html',
        controller: function(){
            this.scrollToTop = function(){
                $('html, body').animate({ scrollTop: 0 }, 'fast');
            }
        },
        controllerAs: 'terms'
    });
    $stateProvider.state({
        name: 'care',
        url:'/care',
        templateUrl: './html/care.html',
        controller: function(){
            this.scrollToTop = function(){
                $('html, body').animate({ scrollTop: 0 }, 'fast');
            }
        },
        controllerAs: 'care'
    });
    $stateProvider.state({
        name: 'returns',
        url:'/returns',
        templateUrl: './html/return.html',
        controller: function(){
            this.scrollToTop = function(){
                $('html, body').animate({ scrollTop: 0 }, 'fast');
            }
        },
        controllerAs: 'return'
    });
    $stateProvider.state({
        name: 'about',
        url:'/about',
        templateUrl: './html/aboutus.html',
        controller: function(){
            this.scrollToTop = function(){
                $('html, body').animate({ scrollTop: 0 }, 'fast');
            }
        },
        controllerAs: 'about'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}])