angular.module("mainAdminApp").controller("adminProductsCtrl", [
  "$scope",
  "$rootScope",
  "$state",
  "$stateParams",
  "adminServices",
  function($scope, $rootScope, $state, $stateParams, adminServices) {
    $scope.fetchProducts = function(pgNo) {
      adminServices.fetchProducts(pgNo).then(
        function(response) {
          $scope.totalProducts = response.data.total;
          $scope.productsToDisplay = response.data.products;
          $(document).ready(function() {
            if (!$scope.car_initialized) {
              $(".owl-carousel.productDetailsAdmin").owlCarousel({
                items: 1,
                nav: true,
                dots: false,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
              });
            }
          });
        },
        function(response) {}
      );
    };
    $scope.init = function() {
      $scope.pageNumber = $stateParams.pageNumber;
      $scope.fetchProducts($scope.pageNumber);
    };
    $scope.changePage = function(type) {
      if (type === "++") $scope.pageNumber++;
      else $scope.pageNumber--;
      $state.go("products", {pageNumber: $scope.pageNumber});
    };
    $scope.openProduct = function(id) {
      $state.go("productDetails", { src: id });
    };
    $scope.totalProducts = 0;
    $scope.pageNumber = 0;
    $scope.init();
  }
]);
