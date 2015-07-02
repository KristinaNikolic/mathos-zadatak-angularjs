angular.module('poll')
	.controller('MainController', ['$scope', '$timeout', function ($scope, $timeout) {
		$scope.title = 'Please, choose one of the options.';
		$scope.answerA = 'Option A';
		$scope.answerB = 'Option B';
		$scope.answerC = 'Option C';
		
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