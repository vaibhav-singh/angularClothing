angular.module('mainApp').controller('checkoutCtrl', ['$scope', '$stateParams', '$rootScope', function ($scope, $stateParams, $rootScope) {
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
            $scope.totalAmount += $scope.cartDetails[i].quantity + $scope.cartDetails[i].productDetails.price;
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
        console.log($scope.forms.addressForm.$valid)
        if($scope.forms.addressForm.$valid){
            localStorage.setItem('address', JSON.stringify($scope.addressDetails));
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
    $scope.onload();
    $scope.checkIfAddressIsAlreadyStoredInDevice();
}])