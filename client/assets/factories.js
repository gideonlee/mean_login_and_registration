app.factory('UserFactory', ['$http', function($http) {
	var factory = {};

	// DELETE THIS FUNCTION LATER
	factory.index = function() {
		return $http.get('/users');
	}

	factory.create = function(user) {
		console.log(user);
		return $http.post('/users', user);
	};

	return factory;
}]);