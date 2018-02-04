angular.module('mainAdminApp').controller('adminHomeCtrl', ['$scope', 'adminServices', '$rootScope', '$state', function($scope, adminServices, $rootScope, $state){
    $scope.adminDetails = {};
    $scope.loginResponse = {};
    $rootScope.adminLoggedIn = true;
    $scope.adminLoginCheck = function(){
        adminServices.login($scope.adminDetails).then(function(response){
            if(response.data.status){
                $rootScope.adminLoggedIn = true;
                localStorage.setItem('adminLoggedIn', "true");
            } else{
                $rootScope.adminLoggedIn = false;
                $scope.loginResponse.message = "CHUTIYA SALA"
            }
        }, function(response){})
    };
    $scope.init = function(){
        $rootScope.adminLoggedIn = false;
        // if(localStorage.getItem("adminLoggedIn") === "true"){
        //     $rootScope.adminLoggedIn = true;
        // } else{
        //     $rootScope.adminLoggedIn = false;
        // }
    };
    $scope.init();
}])