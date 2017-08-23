var mainModule = angular.module('mainApp', ['ui.router', 'ngSanitize']);

mainModule.run(['productService' ,function(productService){
    productService.fetchTags().then(function(response){
        localStorage.setItem("tags", JSON.stringify(response.tags));
    }, function(response){})
}])