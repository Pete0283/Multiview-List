'use strict';

myApp.controller('page-3-controller', function($scope, $localStorage){

	$scope.$local = $localStorage.$default({
"list3":[{

		"text": "apple"
	}, {
		"text": "banana"
	}, {
		"text": "watermelon"
	}]

});

	$scope.addTask = function(){

		$scope.$local.list3.push($scope.newTask);
		$scope.newTask = {};
	}

	$scope.deleteTask = function(taskIndex){
		$scope.$local.list3.splice(taskIndex, 1);
	}




	});