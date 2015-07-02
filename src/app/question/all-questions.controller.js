angular.module('poll')		
	.controller('AllController', ['$scope', 'itemService', function ($scope, itemService) {
		itemService.getItems()
			.success (function (response) {
				$scope.items = response.item;
				$scope.title = 'Questions/Answers';
			})
			.error (function (response) {
				$scope.title = 'Failed';
			});
			
		
			
	}]);