angular.module("mainApp").service("CommonServices", [
  "$q",
  "$http",
  function($q, $http) {
    this.hideToggleMenu = function() {
      if ($(".navbar-toggle.collapsed").length <= 0) {
        $(".navbar-toggle").click(); //bootstrap 2.x
      }
    };
    this.getOrderStatus = function(orderId) {
    return $http({
      method: "GET",
      url: '/api/getOrderDetails?orderId='+orderId
    });
};
  }
]);
