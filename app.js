var app = angular.module("angularSmall", ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('users-index', {
      url: "/",
      templateUrl: "templates/users-index.html",
      controller: 'UserIndexCtrl'
    })

    ;

});

app.controller('MainCtrl', function($scope){
	$scope.message = "World!"

});

app.controller('UserIndexCtrl', function($scope){
	// $scope.names = ['Delia', 'Leika', 'Balandra']

	$scope.users = [
		{name: "Betsy", age:73},
		{name: 'Normal', age: 40},
		{name: 'Sonja', age: 6}

	];

	$scope.addPerson = function(){
		// console.log($scope.newPerson);
		$scope.users.push($scope.newPerson);
		$scope.newPerson = {}
	}

});