app.factory('UserFactory', ['$http', function($http) {
	var factory = {};

	// DELETE THIS FUNCTION LATER
	factory.index = function() {
		return $http.get('/users');
	};

	factory.findUser = function(id) {
		return $http.get('/users/'+id);
	}

	factory.register = function(user) {
		return $http.post('/register', user);
	};

	factory.login = function(user) {
		return $http.post('/login', user);
	};

	return factory;
}]);