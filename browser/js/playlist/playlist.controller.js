'use strict';


juke.controller('PlaylistCtrl', function ($scope, $rootScope, PlaylistFactory, $state) {
	

	$scope.submitForm = function(){
		PlaylistFactory.create($scope.nameModel)
		.then(function(playlist){
			return PlaylistFactory.fetchAll()
		})
		.then( function(playlists){
			$scope.playlists = playlists;
			$scope.nameModel.name = null;
			$state.go('albums');
		})

		
	}
});