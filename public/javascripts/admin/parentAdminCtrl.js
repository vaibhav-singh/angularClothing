angular.module("mainAdminApp").controller('parentAdminCtrl',['$scope', '$rootScope', '$state', function($scope, $rootScope, $state){
    $scope.logout = function(){
        $rootScope.adminLoggedIn = false; 
        localStorage.removeItem('adminLoggedIn');
        $state.go('homePage');
    };
    $scope.addProduct = function(){
        $state.go("productDetails", {src: 'newProduct'})
    };
    $scope.showAllProducts = function(){
        $state.go("products", {pageNumber: 0});
    }
    $scope.showPromocodes = function(){
        $state.go("promoCodes");
    }
    $scope.showAllOrders = function(){
        $state.go('ordersDisplay', {pageNumber: 0});
    }
     $scope.init = function(){
        if(localStorage.getItem("adminLoggedIn") === "true"){
            $rootScope.adminLoggedIn = true;
        } else{
            $rootScope.adminLoggedIn = false;
        }
    };
    $scope.init();
}])