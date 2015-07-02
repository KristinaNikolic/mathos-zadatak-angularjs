(function (angular) {
	'use strict';
	angular.module('poll')
	.directive("firstDirective", [function() {
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
			templateUrl : 'app/components/directives/first-directive/first-directive.html'
			};
		}]);
})(angular);