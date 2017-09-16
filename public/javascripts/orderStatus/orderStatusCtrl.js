angular.module("mainApp").controller("orderStatusCtrl", [
  "$scope",
  "$stateParams",
  "CommonServices",
  "$rootScope",
  function($scope, $stateParams, CommonServices, $rootScope) {
    $rootScope.hideCartFromNavBar = true;

    if ($stateParams.orderId === "" || $stateParams.orderId === undefined) {
      var orderId = localStorage.getItem("orderid");
    } else {
      orderId = $stateParams.orderId;
    }
    CommonServices.getOrderStatus(orderId).then(function(response) {
      $scope.orderDetails = response.data.orderDetails[0];
      if($scope.orderDetails.orderStatus === "processing"){
          localStorage.removeItem('finalcart');
          localStorage.removeItem('cartDetails');
      }
    });
    $scope.$on("$stateParamsChangeStart", function(event, toState, toParams, fromState, fromParams, options) {
      $rootScope.hideCartFromNavBar = false;
    });
  }
]);
