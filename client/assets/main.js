var app = angular.module('App', ['ngRoute', 'ngCookies', 'ngFlash']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/partials/_loginReg.html',
		controller: 'LoginRegController', 
	})
	.when('/summary', {
		templateUrl: '/partials/_summary.html',
		controller: 'SummaryController',
	})
	.when('/users', {
		// DELETE THIS ROUTE LATER
		templateUrl: '/partials/_showAll.html',
		controller: 'LoginRegController',
	})
});