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

app.controller('UserIndexCtrl', function($scope, User){
	$scope.users = User.all();
	$scope.addPerson = function(){
		// console.log($scope.newPerson);
		$scope.users.push($scope.newPerson);
		$scope.newPerson = {}
	}

});


app.controller('UserShowCtrl', function($scope, $stateParams,  User, $http){
	$scope.user = User.get($stateParams.user_id); 
	//console.log();

	var query = 'http://api.giphy.com/v1/gifs/search?q='+ $scope.user.name +'&api_key=dc6zaTOxFJmzC';
	$http.get(query).then(
		function(data){
			console.log(data);
			$scope.gifs = data.data.data;
		},
		function(error){
			console.log(error);
		}

		)

});

app.factory('User', function(){

	var users = [
		{ id: 1, name: "Betsy", age:73},
		{ id: 2, name: 'Norman', age: 40},
		{ id: 3, name: 'Sonja', age: 6}

	];

	return {

		all: function(){
			return users;
		},

		remove: function(user){
			users.splice(users.indexOf(user), 1);
		},

		get: function(user_id){
			for(var i in users){
				if(users[i].id == parseInt(user_id))
					return users[i];
			}
			return null;
		}




	}

});