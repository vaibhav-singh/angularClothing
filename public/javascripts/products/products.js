angular.module("mainApp").controller("productsCtrl", ['$scope', '$stateParams', 'productService', function($scope, $stateParams, productService){
    $scope.init = function(gender, superCategory, subCategory, src, tagsSelected, pageNo){
        // tags from local storage
        // fetch products
        pageNo++;
        productService.getproductsToDisplay(gender, superCategory, subCategory, src, tagsSelected, pageNo).then(function(response){
            $scope.productsToDisplay = response.products;
            $scope.totalCount = response.totalCount;
            if(response.totalCount > $scope.productsToDisplay.length){
                $scope.moreItemsAvailable = true;
            } else{
                $scope.moreItemsAvailable = false;
            }
            for(var i=0;i<$scope.productsToDisplay.length;i++){
                $scope.fetchAvailableSizes($scope.productsToDisplay[i], i);

            }
        }, function(response){
            
        });
    };
    // load more products
    $scope.loadMore = function(){
        pageNo++;
        productService.getproductsToDisplay($scope.params.gender, $scope.params.superCategory, $scope.params.subCategory, $scope.params.src, $scope.tagsSelected, pageNo).then(function(response){
            var noOfProductsBeforeConctination = $scope.productsToDisplay.length;
            $scope.totalCount = response.totalCount;
            $scope.productsToDisplay = $scope.productsToDisplay.concat(response.products);
            if(response.totalCount > $scope.productsToDisplay.length){
                $scope.moreItemsAvailable = true;
            } else{
                $scope.moreItemsAvailable = false;
            }
            for(var i=noOfProductsBeforeConctination;i<$scope.productsToDisplay.length;i++){
                $scope.fetchAvailableSizes($scope.productsToDisplay[i], i);

            }
        }, function(response){
            
        });
    }
    // change selected tags
    $scope.changeTags = function(tag){
        if($scope.tagsSelected.indexOf(tag) >= 0){
            $scope.tagsSelected.splice($scope.tagsSelected.indexOf(tag), 1);
        } else{
            $scope.tagsSelected.push(tag);
        }
        pageNo = 0;
        $scope.init($scope.params.gender, $scope.params.superCategory, $scope.params.subCategory, $scope.params.src, $scope.tagsSelected,pageNo);
    }
    // fetch sizes
    $scope.fetchAvailableSizes = function(productId, index){
        productService.fetchAvailableSizes(productId).then(function(response){
            $scope.productsToDisplay[index].sizes = Object.keys(response.sizes);
            console.log(response)
        }, function(response){

        })
    };
    // scroll to top
    $scope.scrollToTop = function(){
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
// initializations
    var pageNo = 0;
    $scope.totalCount = 0;
    $scope.params = $stateParams;
    $scope.tagsSelected = [];
    $scope.moreItemsAvailable = true;
    $scope.loadingItems = false;
    $scope.tags = JSON.parse(localStorage.getItem('tags'));
    $scope.init($scope.params.gender, $scope.params.superCategory, $scope.params.subCategory, $scope.params.src, $scope.tagsSelected, pageNo);
    $(document).ready(function () {
        $(".owl-carousel.categories").owlCarousel({
            items: 2,
            dots: false
        });
    });
}]);