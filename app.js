var movieTime = angular.module('movieTime', ['ngRoute','templates']);

movieTime.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'MoviesCtrl',
				templateUrl: 'views/Movies.html'
			})
		.when('/sign-in',
		{
			controller: 'SignInCtrl',
			templateUrl: 'views/SignIn.html'
		})
});