'use strict'

juke.config(function ($stateProvider) {

	$stateProvider.state('playlist', {
		url: '/playlist',
		templateUrl: '/js/playlist/templates/playlist.html',
		controller: 'PlaylistCtrl'
	});

});