'use strict'

juke.config(function ($stateProvider) {

	$stateProvider.state('playlist', {
		url: '/playlist',
		templateUrl: '/js/playlist/templates/playlist.html',
		controller: 'PlaylistCtrl'
	});

	$stateProvider.state('singlePlaylist', {
		url: '/playlists/:id',
		templateUrl: '/js/playlist/templates/single.playlist.html',
		resolve: {
			playlist: function(PlaylistFactory, $stateParams){
				return PlaylistFactory.fetchById($stateParams.id)
			}
		},
		controller: 'SinglePlaylistCtrl'
	});




});