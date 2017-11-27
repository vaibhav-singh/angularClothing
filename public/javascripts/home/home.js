angular.module('mainApp').controller("homePageCtrl", ["$scope", '$timeout', '$rootScope', '$state', '$location', function($scope, $timeout, $rootScope, $state, $location){
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
        $scope.owl = $('.owl-carousel');
    });
    $scope.gotoUrl = function(url){
        $location.url(url);
    }
    $timeout(function(){
        $scope.pageLoaded = true;
    }, 1000)
}]);