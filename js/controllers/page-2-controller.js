'use strict';

myApp.controller('page-2-controller', function($scope, $localStorage){

	$scope.$local = $localStorage.$default({
"list2":[{

		"text": "apple"
	}, {
		"text": "banana"
	}, {
		"text": "watermelon"
	}]

});

	$scope.addTask = function(){

		$scope.$local.list2.push($scope.newTask);
		$scope.newTask = {};
	}

	$scope.deleteTask = function(taskIndex){
		$scope.$local.list2.splice(taskIndex, 1);
	}




	});