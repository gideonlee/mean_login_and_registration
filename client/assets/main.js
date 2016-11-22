var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/partials/_loginReg.html',
		controller: 'LoginRegController', 
	})
	.when('/users', {
		// DELETE THIS ROUTE LATER
		templateUrl: '/partials/_showAll.html',
		controller: 'LoginRegController',
	})
});