angular.module('mainApp').controller("homePageCtrl", ["$scope", '$timeout', '$rootScope', '$state', '$location', 'productService', function($scope, $timeout, $rootScope, $state, $location, productService){
    $rootScope.hideCartFromNavBar = false;
    $(document).ready(function () {
        $(".owl-carousel.homePage").owlCarousel({
            items: 1,
            // nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed:650,
            dots: true,
            autoplayHoverPause: true,
            // navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
        });
        // var waypoint = new Waypoint({
        //     element: document.getElementById('collectionImage'),
        //     handler: function() {
        //         // alert("triggereed")
        //         $scope.handPickedOnScreen = true;
        //         $scope.$apply()
        //     },
        //     offset: 200
        // })
        $scope.owl = $('.owl-carousel.homePage');
            
    });
    $scope.getHotsellers = () => {
        productService.getproductsToDisplay('men', 'topwear', 'Solids', '', 'ocselect', 1, 6).then(function(response){
            $scope.hotsellers = response.data.products;
            $(document).ready(function () {
                $('.owl-carousel.hotsellers').owlCarousel({
                    // rtl:true,
                    // loop:true,
                    margin:10,
                    nav:true,
                                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],

                    responsive:{
                        0:{
                            items:2
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:3
                        }
                    }
                })        
            })
        }, function(response){
            
        });
    }
    $scope.getHotsellers();
    $scope.gotoUrl = function(url){
        $location.url(url);
    }
    $scope.openProduct = function(url, id, index){
        $state.go('productDetails', {productId: id})
    }
    $timeout(function(){
        $scope.pageLoaded = true;
    }, 1000)
}]);