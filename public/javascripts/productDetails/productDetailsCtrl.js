angular.module('mainApp').controller('productDetailsCtrl', ['$scope', '$stateParams', 'productService', 'locale', function($scope, $stateParams, productService, locale){
    $scope.init = function(productId){
        // get product Details
        productService.getDetailsForProduct(productId).then(function(response){
            console.log(response)         
            $scope.details = response;
            $(document).ready(function () {
                $(".owl-carousel").owlCarousel({
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
    $scope.init($stateParams.productId);
    $scope.getSizes($stateParams.productId);
}]);