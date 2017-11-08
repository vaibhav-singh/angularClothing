angular.module("mainAdminApp").controller("promoCodesCtrl", ["$scope",
  "$rootScope",
  "$state",
  "$stateParams",
  "adminServices",
  function($scope, $rootScope, $state, $stateParams, adminServices){
      $scope.init = () =>{
          $scope.promo = {};
          $scope.promoDetails = {};
          $scope.promoDetails.reducePriceMethod = "amount"
          adminServices.fetchAllPromoCodes().then(response => {
              $scope.promo.codes = response.data.promoCodes;
          } , response => {});
      }
      $scope.deleteCode = code => {
          adminServices.deletePromoCode(code).then(response => {
              if(response.data.success){
                  $scope.init();
              }
          })
      }
      
      $scope.addPromoCode = code => {
          adminServices.addPromoCode($scope.promoDetails).then(response => {
              if(response.data.success){
                  $scope.init();
              }
          })
      }

      $scope.init();
  }
  ])