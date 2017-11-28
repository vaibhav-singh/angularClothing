angular.module('mainApp')
.controller("headerCtrl", ['$scope', '$rootScope', '$stateParams', 'locale', 'CommonServices', 'cartRelatedServices', '$state', 'productService', '$anchorScroll', '$location', function($scope, $rootScope, $stateParams, locale, CommonServices, cartRelatedServices, $state, productService, $anchorScroll, $location){
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
    $scope.scrollToId = function(id){
        var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        $location.hash(old);
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
    $scope.notifyWomen = function(){
        productService.sendRequestForSize($scope.notifyEmail, "womenNotify", "-").then(function(response){
                $scope.notified=true;
                $scope.notifyEmail = "";
            })
    }
    $rootScope.cart.cartDetails = JSON.parse(localStorage.getItem('cartDetails')) ? JSON.parse(localStorage.getItem('cartDetails')) : [];
    cartRelatedServices.cartDetails = $rootScope.cart.cartDetails;
}]);