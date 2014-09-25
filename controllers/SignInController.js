movieTime.controller('SignInCtrl', function SignInCtrl($scope, MoviesFactory) {
	$scope.movies = MoviesFactory.movies;
});