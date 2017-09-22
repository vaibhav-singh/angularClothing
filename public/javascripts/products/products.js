angular.module("mainApp").controller("productsCtrl", ['$scope', '$stateParams', 'productService', '$location', '$anchorScroll', '$state', '$rootScope', function($scope, $stateParams, productService, $location,  $anchorScroll,$state, $rootScope){
    $scope.init = function(gender, superCategory, subCategory, src, tagsSelected){
        // tags from local storage
        // fetch products 
        pageNo++;
        localStorage.setItem('pageNo', pageNo);
        $rootScope.hideCartFromNavBar = false;
        productService.getproductsToDisplay(gender, superCategory, subCategory, src, tagsSelected, pageNo).then(function(response){
            $scope.productsToDisplay = response.data.products;
            $scope.totalCount = response.data.totalCount;
            localStorage.setItem('totalProducts', $scope.totalCount);
            if(response.data.totalCount > $scope.productsToDisplay.length){
                $scope.moreItemsAvailable = true;
            } else{
                $scope.moreItemsAvailable = false;
            }
            // for(var i=0;i<$scope.productsToDisplay.length;i++){
            //     $scope.fetchAvailableSizes($scope.productsToDisplay[i], i);
            // }
            localStorage.setItem("products", JSON.stringify($scope.productsToDisplay));
        }, function(response){
            
        });
    };
    // load more products
    $scope.loadMore = function(){
        pageNo++;
        localStorage.setItem('pageNo', pageNo);
        productService.getproductsToDisplay($scope.params.gender, $scope.params.superCategory, $scope.params.subCategory, $scope.params.src, $scope.tagsSelected, pageNo).then(function(response){
            var noOfProductsBeforeConctination = $scope.productsToDisplay.length;
            $scope.totalCount = response.data.totalCount;
            localStorage.setItem('totalProducts', $scope.totalCount);
            $scope.productsToDisplay = $scope.productsToDisplay.concat(response.data.products);
            if(response.data.totalCount > $scope.productsToDisplay.length){
                $scope.moreItemsAvailable = true;
            } else{
                $scope.moreItemsAvailable = false;
            }
            // for(var i=noOfProductsBeforeConctination;i<$scope.productsToDisplay.length;i++){
            //     $scope.fetchAvailableSizes($scope.productsToDisplay[i], i);
            // }
            localStorage.setItem("products", JSON.stringify($scope.productsToDisplay));
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
    // $scope.fetchAvailableSizes = function(productId, index){
    //     productService.fetchAvailableSizes(productId).then(function(response){
    //         $scope.productsToDisplay[index].sizes = Object.keys(response.sizes);
    //     }, function(response){

    //     })
    // };
    $scope.openProduct = function(url, id, index){
        localStorage.setItem('anchor', id+index);
        $state.go('productDetails', {productId: id})
    }
    // scroll to top
    $scope.scrollToTop = function(){
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
// initializations
$rootScope.goingToHeader = false;
if(!$stateParams.src){
    $scope.params = $stateParams;
    var pageNo = 0;
    localStorage.setItem('pageNo', pageNo);
    $scope.totalCount = 0;
    localStorage.setItem('totalProducts', $scope.totalCount);
    $scope.tagsSelected = $stateParams.tags;
    $scope.moreItemsAvailable = true;
    $scope.loadingItems = false;
    $scope.tags = JSON.parse(localStorage.getItem('tags'));
    $scope.init($scope.params.gender, $scope.params.superCategory, $scope.params.subCategory, $scope.params.src, $scope.tagsSelected);
} else if($stateParams.src === "chef"){
} else{
    $scope.params = $stateParams;
    // from product
    var pageNo = localStorage.getItem('pageNo');
    var anchor = $stateParams.src;
    $scope.productsToDisplay = JSON.parse(localStorage.getItem('products'));
    $(document).ready(function () {
      $location.hash(anchor);
      $anchorScroll();
    })
    $scope.totalCount = localStorage.getItem('totalProducts');
    if($scope.totalCount > $scope.productsToDisplay.length){
        $scope.moreItemsAvailable = true;
    } else{
        $scope.moreItemsAvailable = false;
    }

}
    $(document).ready(function () {
        $(".owl-carousel.categories").owlCarousel({
            items: 2,
            dots: false
        });
    });
}]);