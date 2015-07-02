(function (angular) {
	'use strict';
	angular.module('poll')
	.directive("firstDirective", [function() {
		return {
			restrict: "EA",
			scope : {
				answerA: '@',
				answerB: '@',
				totalA: '@',
				totalB: '@',
				totalC: '@',
				optionA: '&',
				optionB: '&',
				winner: '&'
			},
			templateUrl : 'app/components/directives/first-directive/first-directive.html'
			};
		}]);
})(angular);