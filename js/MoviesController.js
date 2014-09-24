movieTime.controller('MoviesCtrl', function MoviesCtrl($scope){
	$scope.movies = [];
	$scope.addMovie = function() {
		$scope.movies.push({"title": $scope.movieName});
		$scope.movieName = null;
	};
});