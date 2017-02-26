var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.name = 'jane doe';
    $scope.occupation = 'coder';
    
    $scope.getname = function (){
        return 'John doe';
    };
    
    $scope.getname();
    
    console.log($scope);
});


