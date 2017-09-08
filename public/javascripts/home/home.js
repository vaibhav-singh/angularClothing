angular.module('mainApp').controller("homePageCtrl", ["$scope", '$timeout', function($scope, $timeout){
    $(document).ready(function () {
        $(".owl-carousel.homePage").owlCarousel({
            items: 1,
            // nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed:650,
            dots: false,
            autoplayHoverPause: true,
            // navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
        });
        $scope.owl = $('.owl-carousel');
    });
    $timeout(function(){
        $scope.pageLoaded = true;
    }, 1000)
}]);