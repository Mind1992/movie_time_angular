movieTime.factory('MoviesFactory', function MoviesFactory() {
	var factory = {};
	factory.movies = [];
	
	factory.addMovie = function() {
		factory.movies.push({"title": factory.movieTitle});
		factory.movieTitle = null;
	};

	factory.deleteMovie = function(movie) {
		var index = factory.movies.indexOf(movie)
		factory.movies.splice(index, 1);
	};

	return factory;
});