'use strict'

juke.factory('PlaylistFactory', function ($http) {
	var PlaylistFactory = {}

	var cachedPlaylists = [];

	PlaylistFactory.create = function(data){
		return $http.post('/api/playlists', data)
		.then(function(res){
			cachedPlaylists.push(res.data);
			return cachedPlaylists;
		});
	}

	PlaylistFactory.fetchAll = function(data){
		console.log("got here")
		return $http.get('/api/playlists')
		.then(function(res){
			angular.copy(res.data, cachedPlaylists);
			return cachedPlaylists;
		});
	}



	return PlaylistFactory;

});