angular.module('poll')		
	.controller('AllController', ['$scope', 'itemService', function ($scope, itemService) {
		itemService.getAllItems()
			.then (function (items) {
				$scope.items = items;
				$scope.title = 'Questions/Answers';
			}, function () {
				$scope.title = 'Server communication error';
			});
		
			
	}]);