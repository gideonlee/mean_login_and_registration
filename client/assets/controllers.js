app.controller('LoginRegController', ['$scope', 'UserFactory', '$location', '$cookies', 'Flash', function($scope, UserFactory, $location, $cookies, Flash) {
	
	// DELETE THIS FUNCTION LATER
	UserFactory.index().then(function(res) {
		$scope.users = res.data;
	}); 

	$scope.register = function() {
		UserFactory.register($scope.register_user)
		.then(function(res) {
			// If the promise is a success, create a session variable with the user and reroute to summary page 
			$location.url('/summary');
		})
		.catch(function(res) {
			// If the promise is an error, display the error. 
			for (var key in res.data.errors) {
				Flash.create('danger', res.data.errors[key].message);
			}
		});
	};

	$scope.login = function() {
		UserFactory.login($scope.login_user)
		.then(function(res) {
			// If the promise is a success, create a session and reroute to summary page.
			$cookies.put('user_id', res.data[0]._id);
			$location.url('/summary');
		})
		.catch(function(res) {
			// If the promise is an error, display the error. 

			console.log(res.data.error);
		});
	};
}]);

app.controller('SummaryController', ['$scope', '$cookies', 'UserFactory', '$location', function($scope, $cookies, UserFactory, $location) {
	if ($cookies.get('user_id') !== undefined) {
		UserFactory.findUser($cookies.get('user_id')).then(function(res) {
			$scope.user = res.data[0];
		});
	} else {
		$location.url('/');
	}

	$scope.logout = function() {
		$cookies.put('user_id', undefined);
		$location.url('/');
	}
}]);