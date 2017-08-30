angular.module('mainApp').controller('checkoutCtrl', ['$scope', '$stateParams', '$rootScope', '$state', function ($scope, $stateParams, $rootScope, $state) {
    $scope.cartDetails = JSON.parse(localStorage.getItem('finalCart'));
    $scope.cartDetailsRefined = [];
    $scope.forms = {};
    $rootScope.hideCartFromNavBar = true;
    $scope.totalAmount = 0;
    $rootScope.cartDropDownVisible = false;
    $scope.addressDetails = {};
    // onload refines the cart details
    $scope.onload = function () {
        for (var i = 0; i < $scope.cartDetails.length; i++) {
            $scope.cartDetailsRefined[i] = { productId: $scope.cartDetails[i].productId, quantity: $scope.cartDetails[i].quantity, size: $scope.cartDetails[i].size };
            $scope.totalAmount += $scope.cartDetails[i].quantity*$scope.cartDetails[i].productDetails.price;
            // $scope.checkForsizeAvailability();
        }
    }
    $scope.checkForsizeAvailability = function (ObjectContainingProductId_size_size) {

    }
    $scope.checkIfAddressIsAlreadyStoredInDevice = function(){
        var storedAddress = localStorage.getItem('address');
        if(storedAddress){
            $scope.newAddress = false;
            $scope.addressDetails = JSON.parse(storedAddress);
        } else{
            $scope.newAddress = true;
        }
    };
    $scope.placeOrderAndPayButtonClicked = function(){
        $scope.showErrors = true;
        if(!$scope.newAddress || $scope.forms.addressForm.$valid){
            localStorage.setItem('address', JSON.stringify($scope.addressDetails));
            // go to payment page get status if status is paid get order id and redirect to orderDetails page
            var paymentsStatus = true;
            if(paymentsStatus){
                 localStorage.removeItem('finalCart');
                if($stateParams.src !== "buyNow")
                    {
                        localStorage.setItem('cartDetails', JSON.stringify([]));
                        $rootScope.numberOfProductsInCart = 0;
                    }
                $state.go("orderStatus", {orderId: 'af'});
            }
        } else{

        }
    };
    $scope.$on('$stateChangeStart', function(){
        $rootScope.hideCartFromNavBar = false;
    });
    $scope.differentAddressButton = function(){
        localStorage.removeItem('address');
        $scope.newAddress =  true;
        $scope.addressDetails = {};
    };
    // flow
    console.log($scope.cartDetails)
    if($scope.cartDetails === null){
            $state.go("homePage");
    } else{
    $scope.onload();
    $scope.checkIfAddressIsAlreadyStoredInDevice();
    }
}])