(function (angular) {
	'use strict';
	angular.module('poll')
	.directive("secondDirective", [function() {
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
			templateUrl : 'app/components/directives/second-directive/second-directive.html'
			};
		}]);
})(angular);