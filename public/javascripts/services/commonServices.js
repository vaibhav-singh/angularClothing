angular.module('mainApp').service('CommonServices', function(){
    this.hideToggleMenu = function(){
        if($('.navbar-toggle.collapsed').length <=0){
            $('.navbar-toggle').click(); //bootstrap 2.x
        };
    };
})