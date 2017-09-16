angular.module("mainApp").controller("orderStatusCtrl", [
  "$scope",
  "$stateParams",
  "CommonServices",
  "$rootScope",
  function($scope, $stateParams, CommonServices, $rootScope) {
    $rootScope.hideCartFromNavBar = true;
console.log($stateParams.orderId)
    var orderId = "";
    if ($stateParams.orderId === "" || $stateParams.orderId === undefined || $stateParams.orderId === null) {
      orderId = localStorage.getItem("orderid");
        alert(orderId+"local")
    } else {
      orderId = $stateParams.orderId;
    }
    alert(orderId)
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
