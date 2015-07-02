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
			
		addAtributes();
		
		function addAtributes() {
			for (item in $scope.items) {
				
				item.totalA = 0;
				item.totalB = 0;
				item.totalC = 0;
				
				item.winner = function() {
					
					var sum = item.totalA + item.totalB + item.totalC;
					if (sum == 0) {
						return '';
					};
					
					if (item.totalA > item.totalB && item.totalA > item.totalC) {
						return item.answers[0].answer;
					} else if (item.totalB > item.totalA && item.totalB > item.totalC) {
						return item.answers[1].answer;
					} else if (item.total > item.totalA && item.totalC > item.totalB) {
						return item.answers[2].answer;
					} else {
						return "Answer tie!";	
					};
				};
				
				item.optionA = function() {
					item.totalA = item.totalA + 1;
				};
				
				item.optionB = function() {
					item.totalB = item.totalB + 1;
				};
				
				item.optionC = function() {
					item.totalC = item.totalC + 1;
				};
				
					}
		}
			
	}]);