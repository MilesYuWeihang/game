/**
*  Module
*
* Description
*/
var myApp = angular.module('myApp', [],function(){})

.factory('addi', function(){
	return function(a,b){
		return a+b;
	}
		
})

.directive("people", function(){
    return {
        restrict: "A",
        scope:{
            info: "="
        },
        template : "<p>name:{{info.name}}</p><p>sex:{{info.sex}}</p>"
    }
})

.controller('firstCtr', function($scope,addi){
	console.log(addi(1,2));
	   $scope.harry = {
        name: "Harry",
        sex : "male"
    };
    	   $scope.peter = {
        name: "peter",
        sex : "female"
    };
});


