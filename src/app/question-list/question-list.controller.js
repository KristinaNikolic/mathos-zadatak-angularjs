angular.module('poll')
	.controller('MainController', ['$scope', 'itemService', function ($scope, itemService) {
		$scope.items;
		itemService.getItems()
			.success (function (response) {
				$scope.items = response.item;
				$scope.title = 'Question List';
			})
			.error (function (response) {
				$scope.title = 'Failed';
			});		
	}]);