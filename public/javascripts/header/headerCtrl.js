angular.module('mainApp')
.controller("headerCtrl", ['$scope', '$stateParams', 'locale', function($scope, $stateParams, locale){
    $scope.brandName = locale.brandName;
}]);