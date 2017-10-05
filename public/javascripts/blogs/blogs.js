angular.module("mainApp").controller("blogsController", [
  "$scope",
  "$stateParams",
  "$state",
  "$rootScope",
  function($scope, $stateParams, $state, $rootScope) {
    $scope.scrollToTop = function() {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    };
  }
]);
