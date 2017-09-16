angular.module("mainApp").controller("orderStatusCtrl", [
  "$scope",
  "$state",
  "CommonServices",
  "$rootScope",
  function($scope, $state, CommonServices, $rootScope) {
    $rootScope.hideCartFromNavBar = true;

    if ($state.orderId === "" || $state.orderId === undefined) {
      var orderId = localStorage.getItem("orderid");
    } else {
      orderId = $state.orderId;
    }
    CommonServices.getOrderStatus(orderId).then(function(response) {
      $scope.orderDetails = response;
    });
    $scope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, options) {
      $rootScope.hideCartFromNavBar = false;
    });
  }
]);
