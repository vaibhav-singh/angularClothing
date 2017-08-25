angular.module('mainApp')
.controller("headerCtrl", ['$scope', '$rootScope', '$stateParams', 'locale', 'CommonServices', 'cartRelatedServices', function($scope, $rootScope, $stateParams, locale, CommonServices, cartRelatedServices){
    $rootScope.brandName = locale.brandName;
    $scope.cart = {};
    $scope.showComingSoon = function(){
        
    };
    $scope.viewCartDropDown = function(){
        $scope.cart.cartDetails = JSON.parse(localStorage.getItem('cartDetails'));
        console.log($scope.cart.cartDetails)
        $rootScope.cartDropDownVisible = !$rootScope.cartDropDownVisible;
        $scope.hideToggleMenu();
    }
    $scope.hideToggleMenu = function(){
        CommonServices.hideToggleMenu();
    }
    $scope.removeItemFromCart = function(product){
        cartRelatedServices.removeProduct(product);
        $scope.cart.cartDetails = JSON.parse(localStorage.getItem('cartDetails'));
        $rootScope.numberOfProductsInCart = $scope.cart.cartDetails.length;
    }
    $scope.cart.cartDetails = JSON.parse(localStorage.getItem('cartDetails'));
}]);