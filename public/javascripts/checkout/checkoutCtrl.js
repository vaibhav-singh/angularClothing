angular.module('mainApp').controller('checkoutCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'productService', function ($scope, $stateParams, $rootScope, $state, productService) {
    $scope.cartDetails = JSON.parse(localStorage.getItem('finalCart'));
    $scope.cartDetailsRefined = [];
    $scope.forms = {};
    $scope.availableProducts = 0;
    $scope.fewProductsUnavailable = false;
    $rootScope.hideCartFromNavBar = true;
    $scope.totalAmount = 0;
    $rootScope.cartDropDownVisible = false;
    $scope.addressDetails = {};
    $scope.productIds = _.pluck($scope.cartDetails, "productId");
    // onload refines the cart details
    $scope.onload = function () {
        $scope.checkForsizeAvailability();
    }
    $scope.checkForsizeAvailability = function () {
        $scope.getSizes($scope.productIds); 
    }
    $scope.getSizes = function(productIds){
        $scope.finalCartAvailable = [];
        $scope.finalCartNotAvailable = [];
        productService.fetchAvailableSizes(productIds).then(function(response){
        //    make size object
            $scope.sizesObject = {}
            _.each(response.data.result, function(obj){
                $scope.sizesObject[obj.id] = obj.sizes;
            });
        // update size object 
            for (var i = 0; i < $scope.cartDetails.length; i++) {
              if($scope.sizesObject[$scope.cartDetails[i].productId][$scope.cartDetails[i].size] >= $scope.cartDetails[i].quantity){
                  $scope.cartDetails[i].available = true;
                  $scope.availableProducts++;
                  $scope.totalAmount += $scope.cartDetails[i].quantity * $scope.cartDetails[i].productDetails.price;
                  $scope.finalCartAvailable.push($scope.cartDetails[i]);
              } else{
                  $scope.cartDetails[i].available = false;
                  $scope.fewProductsUnavailable = true;
                  $scope.cartDetails[i].remainingQuantity = $scope.sizesObject[$scope.cartDetails[i].productId][$scope.cartDetails[i].size];
                  $scope.finalCartNotAvailable.push($scope.cartDetails[i]);
              }
            }
        }, function(response){

        });
    };
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
            // check availability and hold products for some time 
            
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
    if($scope.cartDetails === null){
            $state.go("homePage");
    } else{
    $scope.onload();
    $scope.checkIfAddressIsAlreadyStoredInDevice();
    }
}])