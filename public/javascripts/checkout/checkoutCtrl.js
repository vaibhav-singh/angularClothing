angular.module('mainApp').controller('checkoutCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'productService', 'cartRelatedServices', '$q', function ($scope, $stateParams, $rootScope, $state, productService, cartRelatedServices, $q) {
    $scope.cartDetails = JSON.parse(localStorage.getItem('finalCart'));
    $scope.cartDetailsRefined = [];
    $scope.forms = {};
    $scope.promo = {};
    $scope.promo.code = "";
    $scope.showLoading = false;
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
    $scope.saveTempOrder = function() {
        console.log($scope.totalAmount)
        return cartRelatedServices.saveTempOrder($scope.finalCartAvailable, $scope.addressDetails, $scope.totalAmount, $scope.promoCode);
    };
    $scope.getSizes = function(productIds){
        var promiseForSize = $q.defer();
        $scope.totalAmount = 0;
        $scope.availableProducts = 0;
        $scope.sizeUnavailableAtFinalStage = false;
        $scope.fewProductsUnavailable = false;
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
                console.log($scope.cartDetails[i])
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
                  $scope.sizeUnavailableAtFinalStage = true;
              }
            }
            $scope.cartDetails = $scope.finalCartAvailable;
            $scope.productIds = _.pluck($scope.finalCartAvailable, "productId");
            promiseForSize.resolve({sizeUnavailableAtFinalStage: $scope.sizeUnavailableAtFinalStage});
            localStorage.setItem('finalCart', JSON.stringify($scope.finalCartAvailable));
            if($stateParams.src !== "buyNow"){
                localStorage.setItem('cartDetails', JSON.stringify($scope.finalCartAvailable));
                $rootScope.cart.cartDetails = $scope.finalCartAvailable;
                $rootScope.numberOfProductsInCart = $rootScope.cart.cartDetails.length;
                cartRelatedServices.cartDetails = $scope.finalCartAvailable;
            }
        }, function(response){

        });
            return promiseForSize.promise;
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
    // $scope.$watch('promo.code', function(new1, old){
    //     console.log(new1, old)
    //     // if(new1 === "" && !$scope.promocodeApplied){
            
    //     // }
    // })
    $scope.applyPromoCode = function(){
        $scope.promoCodeSuccess = "";
        $scope.promoCodeError = "";
        $scope.promo.promocodeApplied = true;
        if(!$scope.promo.code){
            $scope.promoCodeError = "Enter Promo Code";
            $scope.promo.promocodeApplied = false;
        } else{
            cartRelatedServices.validatePromoCode($scope.promo.code, $scope.totalAmount).then( (response)=>{
                if(response.data.success){
                    if(response.data.codeAccepted){
                        $scope.originalAmount = $scope.totalAmount;
                        $scope.totalAmount = response.data.updatedAmount;
                        $scope.discount = $scope.originalAmount - $scope.totalAmount;
                        $scope.promoCodeSuccess=response.data.message;
                    } else{
                        $scope.promoCodeError = response.data.message;
                    }
                } else{
                    $scope.promo.promocodeApplied = false;
                    $scope.promoCodeError = "Promo Code Invalid";
                }
            } , ()=>{
                 $scope.promo.promocodeApplied = false;
            })
        }
    }
    $scope.removePromoCode = () => {
        $scope.promo.code = "";
        $scope.promoCodeError = "";
        $scope.promoCodeSuccess = "";
        if($scope.originalAmount) {
            $scope.totalAmount = $scope.originalAmount;
            $scope.originalAmount = undefined;
        }
        $scope.promo.promocodeApplied = false;
    }
    $scope.makePayment = function(){
        console.log($scope.totalAmount)
        return cartRelatedServices.makePayment($scope.finalCartAvailable, $scope.addressDetails, $scope.totalAmount, $scope.orderId);
    }
    $scope.placeOrderAndPayButtonClicked = function(){
        $scope.showErrors = true;
        if(!$scope.newAddress || $scope.forms.addressForm.$valid){
            localStorage.setItem('address', JSON.stringify($scope.addressDetails));
            // go to payment page get status if status is paid get order id and redirect to orderDetails page
            // check availability and hold products for some time 
            $scope.getSizes($scope.productIds).then(function(res){
                if(!res.sizeUnavailableAtFinalStage){
                    console.log($scope.originalAmount)
                    if($scope.originalAmount) $scope.totalAmount = $scope.originalAmount - $scope.discount;
                    $scope.saveTempOrder().then(function(response){
                        if(response.data.success){
                            $scope.orderId = response.data.response.orderId;
                            localStorage.setItem('orderid', $scope.orderId);
                            $scope.showLoading = true;
                            $scope.makePayment().then(function(response) { 
                                document.getElementById("placeHere").innerHTML = response.data;
                                document.getElementById("nonseamless").submit();
                                }, function(){

                                });
                        } 
                    }, function(){});
                }
            })
            // paymentsStatus = false; 
            // if(paymentsStatus){
            //      localStorage.removeItem('finalCart');
            //     if($stateParams.src !== "buyNow")
            //         {
            //             localStorage.setItem('cartDetails', JSON.stringify([]));
            //             $rootScope.numberOfProductsInCart = 0;
            //         }
            //     $state.go("orderStatus", {orderId: $scope.orderId});
            // }
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