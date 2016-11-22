app.controller('LoginRegController', ['$scope', 'UserFactory',function($scope, UserFactory) {
	
	// DELETE THIS FUNCTION LATER
	UserFactory.index().then(function(res) {
		console.log(res);
		$scope.users = res.data;
		$scope.test = 'test';
	}); 

	$scope.register = function() {
		UserFactory.create($scope.user).then(function(res) {
			// Create session and redirect $location.url to _summary.html partial
			console.log(res);
		});
	};
}]);