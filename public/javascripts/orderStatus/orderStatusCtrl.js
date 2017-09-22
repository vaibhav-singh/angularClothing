angular.module("mainApp").controller("orderStatusCtrl", [
  "$scope",
  "$stateParams",
  "CommonServices",
  "$rootScope",
  "$cookies",
  "$cookieStore",
  function($scope, $stateParams, CommonServices, $rootScope, $cookies, $cookieStore) {
    $rootScope.hideCartFromNavBar = true;
    var orderId = "";
    if ($stateParams.orderId === "" || $stateParams.orderId === undefined || $stateParams.orderId === null) {
      orderId = $cookies.get("orderId");
      $rootScope.hideCartFromNavBar = false;
    } else {
      orderId = $stateParams.orderId;
    }
    CommonServices.getOrderStatus(orderId).then(function(response) {
      $scope.orderDetails = response.data.orderDetails[0];
      console.log($scope.orderDetails);
      if ($scope.orderDetails.orderStatus === "processing") {
        localStorage.removeItem("finalcart");
        localStorage.removeItem("cartDetails");
      }
    });
    $scope.$on("$stateParamsChangeStart", function(event, toState, toParams, fromState, fromParams, options) {
      console.log('state change start')
      $rootScope.hideCartFromNavBar = false;
    });
  }
]);
