angular.module('mainApp').controller('productDetailsCtrl', ['$scope', '$stateParams', 'productService', 'locale', 'cartRelatedServices', '$rootScope', '$timeout', '$state', function($scope, $stateParams, productService, locale, cartRelatedServices, $rootScope, $timeout, $state){
    $scope.init = function(productId){
        // get product Details
        productService.getDetailsForProduct(productId).then(function(response){
            $scope.details = response.data.productDetails;
            $(document).ready(function () {
                $(".owl-carousel.productDetails").owlCarousel({
                    items:1,
                    nav:true,
                    dots: false,
                    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
                });
                $scope.owl = $('.owl-carousel');
            });
        }, function(response){

        });
    };
    $scope.getSizes = function(productId){
        productService.fetchAvailableSizes(productId).then(function(response){
            // $scope.sizes = response.sizes;
             $scope.sizes = {};
            for(var i = 0; i<locale.sizes.length; i++){
                $scope.sizes[locale.sizes[i]+""] = response.sizes[locale.sizes[i]+""] ? response.sizes[locale.sizes[i]+""] : 0;
            }
        }, function(response){

        })
    };
    $scope.selectSize = function(size){
        $scope.selectedSize = size;
    }
    $scope.nextImage = function(){
        $scope.owl.trigger('next.owl.carousel');
    }
    $scope.prevImage = function(){
        $scope.owl.trigger('prev.owl.carousel');
    }
    // add to cart
    $scope.addToCart = function(product, selectedSize){
        $scope.buyNowOrAddToCartClicked = true;
        if(selectedSize){
            productToAdd = {productId: product.id, quantity: 1, size: selectedSize, productDetails: product};
            $scope.showSizeError = false;
            $scope.showSizeError = false;
            $scope.buyNowOrAddToCartClicked = false;
            cartRelatedServices.changeQuantityOfProductInCart(productToAdd, "+");
            $rootScope.cart.cartDetails = JSON.parse(localStorage.getItem('cartDetails'))
            $rootScope.cartDropDownVisible = true;
            delete $scope.selectedSize;
        } else{
            $scope.showSizeError = true;
        }
        $rootScope.numberOfProductsInCart = cartRelatedServices.cartDetails.length;
        $timeout(()=>revertClickFlags(), 1000);
    };
    $scope.buyItNow = function(product, selectedSize){
         $scope.buyNowOrAddToCartClicked = true;
          if(selectedSize){
            productToAdd = {productId: product.id, quantity: 1, size: selectedSize, productDetails: product};
            $scope.showSizeError = false;
            $scope.showSizeError = false;
            $scope.buyNowOrAddToCartClicked = false;
            localStorage.setItem('finalCart', JSON.stringify([productToAdd]));
            $state.go('checkout', {src:"buyNow"});
            delete $scope.selectedSize;
        } else{
            $scope.showSizeError = true;
        }
        // $rootScope.numberOfProductsInCart = cartRelatedServices.cartDetails.length;
        $timeout(()=>revertClickFlags(), 1000);
    }
    // selectSizeForRequest
    $scope.selectSizeForRequest = function(size){
        $scope.sizeForRequest = size;
    }
    // sendRequestForSize
    $scope.sendRequestForSize = function(){
        if($scope.sizeForRequest){
            $scope.showRequestForSizeDiv = false;
            $scope.requestForSizeBtnClicked = false;
            delete $scope.sizeForRequest;
        } else{
            $scope.requestForSizeBtnClicked = true;
        }
        $timeout(()=>revertClickFlags(), 1000);
        if(!$scope.sizeForRequest){
            return false;
        } else{

        }
    }
    $scope.proceedToCheckOut = function(cart){
        $state.go('checkout', {cart: cart});
    }
    var revertClickFlags = function(){
        $scope.buyNowOrAddToCartClicked = false;
        $scope.requestForSizeBtnClicked = false;
    }

    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
        if(toState.name === "products" && toParams.src !== localStorage.getItem('anchor')){
            toParams.src = localStorage.getItem('anchor');
            event.preventDefault();
            $state.go(toState.name, toParams);
        }
    })
    $scope.showSizeError = false;
    $scope.init($stateParams.productId);
    $scope.getSizes($stateParams.productId);
}]);