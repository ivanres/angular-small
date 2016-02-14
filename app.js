var app = angular.module("angularSmall", [])

app.controller('MainCtrl', function($scope){
	$scope.message = "World!"

	// $scope.names = ['Delia', 'Leika', 'Balandra']

	$scope.people = [
		{name: "Betsy", age:73},
		{name: 'Normal', age: 40},
		{name: 'Sonja', age: 6}

	];

	$scope.addPerson = function(){
		// console.log($scope.newPerson);
		$scope.people.push($scope.newPerson);
		$scope.newPerson = {}
	}

})