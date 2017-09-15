angular.module('mainApp')
.controller("headerCtrl", ['$scope', '$rootScope', '$stateParams', 'locale', 'CommonServices', 'cartRelatedServices', '$state', function($scope, $rootScope, $stateParams, locale, CommonServices, cartRelatedServices, $state){
    $rootScope.brandName = locale.brandName;
    $rootScope.cart = {};
    $scope.showComingSoon = function(){
        
    };
    $scope.viewCartDropDown = function(){
        $rootScope.cart.cartDetails = JSON.parse(localStorage.getItem('cartDetails'));
        cartRelatedServices.cartDetails = $rootScope.cart.cartDetails;
        // console.log($rootScope.cart.cartDetails)
        $rootScope.cartDropDownVisible = !$rootScope.cartDropDownVisible;
        $scope.hideToggleMenu();
    }
    $scope.hideToggleMenu = function(){
        CommonServices.hideToggleMenu();
    }
    $scope.removeItemFromCart = function(product){
        cartRelatedServices.removeProduct(product);
        $rootScope.cart.cartDetails = JSON.parse(localStorage.getItem('cartDetails'));
        cartRelatedServices.cartDetails = $rootScope.cart.cartDetails;
        $rootScope.numberOfProductsInCart = $rootScope.cart.cartDetails.length;
        localStorage.setItem('finalCart', JSON.stringify($rootScope.cart.cartDetails));
        // localStorage.setItem('finalCart', JSON.stringify($rootScope.cart.cartDetails));
    }
    $scope.proceedToCheckOut = function(cart){
        localStorage.setItem('finalCart', JSON.stringify(cart));
        $state.go('checkout', {src:"cart"});
    }
    $scope.redirectTo = function(){
      $rootScope.goingToHeader = true;  
    }
    $rootScope.cart.cartDetails = JSON.parse(localStorage.getItem('cartDetails')) ? JSON.parse(localStorage.getItem('cartDetails')) : [];
    cartRelatedServices.cartDetails = $rootScope.cart.cartDetails;
}]);