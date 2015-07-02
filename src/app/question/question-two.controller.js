angular.module('poll')		
	.controller('SecondController', ['$scope', 'itemService', function ($scope, itemService) {
		itemService.getItems()
			.success (function (response) {
				$scope.item = response.item[1];
				$scope.answerA = response.item[1].answers[0];
				$scope.answerB = response.item[1].answers[1];
				$scope.answerC = response.item[1].answers[2];
				$scope.title = 'Question One';
			})
			.error (function (response) {
				$scope.title = 'Failed';
			});
			
		$scope.totalA = 0;
		$scope.totalB = 0;
		$scope.totalC = 0;
		
		$scope.winner = function() {
			
			var sum = $scope.totalA + $scope.totalB + $scope.totalC;
			if (sum == 0) {
				return '';
			};
			
			if ($scope.totalA > $scope.totalB && $scope.totalA > $scope.totalC) {
				return $scope.answerA;
			} else if ($scope.totalB > $scope.totalA && $scope.totalB > $scope.totalC) {
				return $scope.answerB;
			} else if ($scope.totalC > $scope.totalA && $scope.totalC > $scope.totalB) {
				return $scope.answerC;
			} else {
				return "Answer tie!";	
			};
		};
		
		$scope.optionA = function() {
			$scope.totalA = $scope.totalA + 1;
		};
		
		$scope.optionB = function() {
			$scope.totalB = $scope.totalB + 1;
		};
		
		$scope.optionC = function() {
			$scope.totalC = $scope.totalC + 1;
		};
			
	}]);