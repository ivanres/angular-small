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
	.state('user-show', {
      url: "/users/:user_id",
      templateUrl: "templates/user-show.html",
      controller: 'UserShowCtrl'
    })
    ;

});

app.controller('MainCtrl', function($scope){
	$scope.message = "World!"

});

app.controller('UserIndexCtrl', function($scope){
	// $scope.names = ['Delia', 'Leika', 'Balandra']

	$scope.users = [
		{ id: 1, name: "Betsy", age:73},
		{ id: 2, name: 'Normal', age: 40},
		{ id: 3, name: 'Sonja', age: 6}

	];

	$scope.addPerson = function(){
		// console.log($scope.newPerson);
		$scope.users.push($scope.newPerson);
		$scope.newPerson = {}
	}

});


app.controller('UserShowCtrl', function($stateParams){
	console.log($stateParams.user_id);

});