(function (angular) {
	'use strict';
	angular.module('poll')
	.directive("allAnswers", [function() {
		return {
			restrict: "EA",
			scope : {
				answerA: '@',
				answerB: '@',
				answerC: '@',
				totalA: '@',
				totalB: '@',
				totalC: '@',
				optionA: '&',
				optionB: '&',
				optionC: '&',
				winner: '&'
			},
			templateUrl : 'app/components/directives/all-answers/all-answers.html'
			};
		}]);
})(angular);