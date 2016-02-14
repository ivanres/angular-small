var app = angular.module("angularSmall", ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('people-index', {
      url: "/",
      templateUrl: "templates/people-index.html",
      controller: 'PeopleIndexCtrl'
    })

    ;

});

app.controller('MainCtrl', function($scope){
	$scope.message = "World!"

});

app.controller('PeopleIndexCtrl', function($scope){
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

});