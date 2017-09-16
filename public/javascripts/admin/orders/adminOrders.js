angular.module("mainAdminApp").controller('adminOrderCtrl',['$scope', '$rootScope', '$state', 'adminServices', '$stateParams', function($scope, $rootScope, $state, adminServices, $stateParams){
     $scope.fetchOrders = function(pgNo) {
      adminServices.fetchOrders(pgNo).then(
        function(response) {
            $scope.orderDetails = response.data.orders;
            for (var index = 0; index < $scope.orderDetails.length; index++) {
              $scope.orderDetails[index].shipped = $scope.orderDetails[index].shipped+"";
            }
        },
        function(response) {}
      );
    };
    $scope.init = function() {
      $scope.pageNumber = $stateParams.pageNumber;
      $scope.fetchOrders($scope.pageNumber);
    };
    $scope.changePage = function(type) {
        if (type === "++") $scope.pageNumber++;
        else $scope.pageNumber--;
        $state.go("ordersDisplay", {pageNumber: $scope.pageNumber});
    };
    $scope.totalProducts = 0;
    $scope.pageNumber = 0;
    $scope.init();
}]);