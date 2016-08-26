'use strict';


juke.controller('SinglePlaylistCtrl', function ($scope, PlaylistFactory, playlist) {
	$scope.playlist = playlist;
});