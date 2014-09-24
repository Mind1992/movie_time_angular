movieTime.controller('MoviesCtrl', function MoviesCtrl($scope){
	$scope.movies = [];
	
	$scope.addMovie = function() {
		$scope.movies.push({"title": $scope.movieName});
		$scope.movieName = null;
	};

	$scope.deleteMovie = function(movie) {
		var index = $scope.movies.indexOf(movie)
		$scope.movies.splice(index, 1);
	};
});