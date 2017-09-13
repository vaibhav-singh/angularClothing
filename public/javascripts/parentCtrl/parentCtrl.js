angular.module("mainApp").controller('parentCtrl',['$scope', '$rootScope', 'CommonServices', function($scope, $rootScope, CommonServices){
    $scope.hideCart = function(){
        $rootScope.cartDropDownVisible = false;
    }
    $scope.hideMenu = function(){
        CommonServices.hideToggleMenu();
    }
}])