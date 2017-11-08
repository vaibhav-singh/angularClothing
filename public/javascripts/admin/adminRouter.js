angular.module('mainAdminApp').config(['$stateProvider','$locationProvider',function($stateProvider, $locationProvider){
    $stateProvider.state({
        name: 'homePage',
        url:'/adminVeera',
        templateUrl: './html/admin/adminHomePage.html'
    });
    $stateProvider.state({
        name: "productDetails",
        url: '/adminVeera/productDetails/:src',
        templateUrl: './html/admin/adminProductDetails.html'
    });
    $stateProvider.state({
        name: "products",
        url: '/adminVeera/products/:pageNumber',
        templateUrl: './html/admin/adminProducts.html'
    });
    $stateProvider.state({
        name: "ordersDisplay",
        url: '/adminVeera/orders/:pageNumber',
        templateUrl: './html/admin/ordersAdmin.html'
    });
    $stateProvider.state({
        name: "promoCodes",
        url: '/adminVeera/promoCodes',
        templateUrl: './html/admin/promoCodes.html'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}])