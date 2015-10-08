'use strict';

myApp.controller('main-page-controller', function($scope, $localStorage){

	$scope.$local = $localStorage.$default({
"list1":[{

		"text": "apple"
	}, {
		"text": "banana"
	}, {
		"text": "watermelon"
	}]

});

	$scope.addTask = function(){

		$scope.$local.list1.push($scope.newTask);
		$scope.newTask = {};
	}

	$scope.deleteTask = function(taskIndex){
		$scope.$local.list1.splice(taskIndex, 1);
	}




	});