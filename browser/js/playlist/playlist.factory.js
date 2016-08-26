'use strict'

juke.factory('PlaylistFactory', function ($http) {
	var PlaylistFactory = {}

	PlaylistFactory.create = function(data){
		return $http.post('/api/playlists', data)
		.then(function(res){
			return res.data;
		});
	}

	return PlaylistFactory;

});