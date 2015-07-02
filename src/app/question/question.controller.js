angular.module('poll')		
	.controller('ListController', ['$scope', 'itemService', function ($scope, itemService) {
		itemService.getItems()
			.success (function (response) {
				$scope.items = response.item;
				$scope.title = 'Question List';
			})
			.error (function (response) {
				$scope.title = 'Failed';
			});
			
	}]);