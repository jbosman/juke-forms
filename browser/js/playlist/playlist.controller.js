'use strict';


juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
	$scope.submitForm = function(){
		PlaylistFactory.create($scope.nameModel)
		.then(function(playlist){
			console.log(playlist);
			$scope.playlist = playlist;
		})
	}
});