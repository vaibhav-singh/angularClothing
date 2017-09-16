angular.module('mainAdminApp').config(['$stateProvider','$locationProvider',function($stateProvider, $locationProvider){
    $stateProvider.state({
        name: 'homePage',
        url:'/admin',
        templateUrl: './html/admin/adminHomePage.html'
    });
    $stateProvider.state({
        name: "productDetails",
        url: '/admin/productDetails/:src',
        templateUrl: './html/admin/adminProductDetails.html'
    });
    $stateProvider.state({
        name: "products",
        url: '/admin/products/:pageNumber',
        templateUrl: './html/admin/adminProducts.html'
    });
    $stateProvider.state({
        name: "ordersDisplay",
        url: '/admin/orders/:pageNumber',
        templateUrl: './html/admin/ordersAdmin.html'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}])